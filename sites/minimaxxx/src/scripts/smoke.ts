// Club fog: a smoke machine at floor level, drawn by a small WebGL shader (domain-warped noise).
// White only, it lives on black pages with `mix-blend-mode: screen`. The pointer pushes it aside.
// Rendered at a fraction of the screen resolution (fog is soft anyway); asleep off screen;
// one still frame under reduced motion; nothing at all without WebGL.
import { reduce, finePointer, whileVisible } from './scroll';

const VERT = `attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
uniform vec2 res;
uniform float t;
uniform vec2 mouse;
uniform float rise;
uniform float strength;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / res;
  float aspect = res.x / res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  // The pointer parts the fog and stirs it a little.
  vec2 m = vec2(mouse.x * aspect, mouse.y);
  vec2 d = p - m;
  float push = exp(-dot(d, d) * 14.0);
  p += normalize(d + 1e-4) * push * 0.14;

  vec2 q = vec2(fbm(p * 1.4 + vec2(0.0, -t * 0.05)), fbm(p * 1.4 + vec2(5.2, 1.3) - t * 0.04));
  vec2 r = vec2(fbm(p * 2.0 + 3.0 * q + vec2(1.7, 9.2) + t * 0.03), fbm(p * 2.0 + 3.0 * q + vec2(8.3, 2.8) - t * 0.035));
  float f = fbm(p * 1.7 + 2.4 * r + vec2(t * 0.025, -t * 0.07));

  float floorFog = 1.0 - smoothstep(0.0, rise, uv.y);
  float dens = smoothstep(0.32, 0.92, f) * floorFog * (1.0 - push * 0.9);
  float a = clamp(dens * strength, 0.0, 1.0);
  gl_FragColor = vec4(vec3(a), a);
}`;

type Options = {
  /** How high the fog climbs, as a share of the canvas height. */
  rise?: number;
  /** Peak opacity of the fog. */
  strength?: number;
  /** Render resolution as a share of the CSS size. */
  scale?: number;
  /** Element whose pointer moves stir the fog (the canvas itself ignores pointers). */
  area?: HTMLElement;
};

export function initSmoke(canvas: HTMLCanvasElement, { rise = 0.75, strength = 0.55, scale = 0.45, area }: Options = {}) {
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false });
  if (!gl) {
    canvas.remove();
    return;
  }

  const shader = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const program = gl.createProgram()!;
  gl.attachShader(program, shader(gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, shader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    canvas.remove();
    return;
  }
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const u = (name: string) => gl.getUniformLocation(program, name);
  const uRes = u('res');
  const uT = u('t');
  const uMouse = u('mouse');
  gl.uniform1f(u('rise'), rise);
  gl.uniform1f(u('strength'), strength);

  // Pointer, eased so the fog drifts after it instead of snapping.
  const OFF = -10;
  const mouse = { x: OFF, y: OFF, tx: OFF, ty: OFF };
  const zone = area ?? canvas.parentElement!;
  zone.addEventListener('pointermove', (e) => {
    if (!finePointer.matches) return;
    const r = canvas.getBoundingClientRect();
    mouse.tx = (e.clientX - r.left) / r.width;
    mouse.ty = 1 - (e.clientY - r.top) / r.height;
    if (mouse.x === OFF) {
      mouse.x = mouse.tx;
      mouse.y = mouse.ty - 0.4;
    }
  });
  zone.addEventListener('pointerleave', () => {
    mouse.ty = mouse.y - 1.2;
  });

  const draw = (seconds: number) => {
    mouse.x += (mouse.tx - mouse.x) * 0.06;
    mouse.y += (mouse.ty - mouse.y) * 0.06;
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.uniform1f(uT, seconds);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const resize = () => {
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    if (reduce.matches) draw(24);
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  if (reduce.matches) return;
  // Starts a little way into the drift, so the first frame is already fog, not a blank floor.
  const start = performance.now() - 24000;
  whileVisible(canvas, (now) => draw((now - start) / 1000), '100px');
}
