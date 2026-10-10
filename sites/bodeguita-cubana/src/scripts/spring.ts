// A tiny spring integrator for decorative motion (tilts, the swinging lantern).
// Springs keep their velocity when retargeted, so a pointer can change its mind mid-motion
// without the element snapping. One shared rAF loop, asleep whenever every spring has settled.

type Options = { stiffness?: number; damping?: number; mass?: number; precision?: number };

export type Spring = {
  readonly value: number;
  /** Move the resting point; the spring travels there with its current momentum. */
  set(target: number): void;
  /** Add velocity (units per second), like a push. */
  kick(velocity: number): void;
  /** Teleport: value and target become `to`, momentum is dropped. */
  jump(to: number): void;
};

type Running = { step(dt: number): boolean };

const running = new Set<Running>();
let frame = 0;
let last = 0;

const loop = (now: number) => {
  const dt = Math.min((now - last) / 1000, 1 / 30);
  last = now;
  for (const s of running) if (s.step(dt)) running.delete(s);
  frame = running.size ? requestAnimationFrame(loop) : 0;
};

const wake = (s: Running) => {
  running.add(s);
  if (!frame) {
    last = performance.now();
    frame = requestAnimationFrame(loop);
  }
};

export function spring(onChange: (value: number) => void, options: Options = {}): Spring {
  const { stiffness = 170, damping = 26, mass = 1, precision = 0.005 } = options;
  let value = 0;
  let velocity = 0;
  let target = 0;

  const self: Running = {
    // Semi-implicit Euler, sub-stepped so low damping stays stable. Returns true once settled.
    step(dt) {
      const steps = Math.ceil(dt * 240);
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        const force = -stiffness * (value - target) - damping * velocity;
        velocity += (force / mass) * h;
        value += velocity * h;
      }
      const settled = Math.abs(velocity) < precision && Math.abs(value - target) < precision;
      if (settled) {
        value = target;
        velocity = 0;
      }
      onChange(value);
      return settled;
    },
  };

  return {
    get value() {
      return value;
    },
    set(next) {
      target = next;
      wake(self);
    },
    kick(push) {
      velocity += push;
      wake(self);
    },
    jump(to) {
      value = target = to;
      velocity = 0;
      onChange(value);
    },
  };
}
