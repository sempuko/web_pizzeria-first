// The bin: a dark club box. Clothes fall in with real physics (Matter.js), can be grabbed and thrown, and the
// stock is restocked « en continu » while the bin is on screen. Two moving-head beams sweep it (one follows the
// pointer when there is one). Every piece you pick up is rung up on a receipt, with the running total.
// Bodies are simulated, DOM elements only follow them through transform. The loop sleeps off screen.
import Matter from 'matter-js';
import { garments, tags } from '../lib/garments';
import { reduce } from './scroll';

const { Engine, Bodies, Body, Composite, Constraint } = Matter;

type Item = { body: Matter.Body; el: HTMLElement; w: number; h: number; name: string; price: string; picked: boolean };

// White, Breton stripes, and black cut out by a white outline: the pieces read on the dark box.
const FILLS = ['paper', 'paper', 'paper', 'stripe', 'stripe', 'outline'];
const pick = <T,>(list: readonly T[]) => list[Math.floor(Math.random() * list.length)];
const rand = (a: number, b: number) => a + Math.random() * (b - a);

export function initBac(section: HTMLElement) {
  const stage = section.querySelector<HTMLElement>('[data-bac]')!;
  const counter = section.querySelector<HTMLElement>('[data-bac-count]')!;
  const restockBtn = section.querySelector<HTMLButtonElement>('[data-bac-restock]')!;
  const shakeBtn = section.querySelector<HTMLButtonElement>('[data-bac-shake]')!;
  const beams = [...section.querySelectorAll<HTMLElement>('[data-beam]')];
  const ticket = section.querySelector<HTMLElement>('[data-ticket]')!;
  const ticketLines = ticket.querySelector<HTMLElement>('[data-ticket-lines]')!;
  const ticketTotal = ticket.querySelector<HTMLElement>('[data-ticket-total]')!;
  const ticketCount = ticket.querySelector<HTMLElement>('[data-ticket-count]')!;
  const ticketFree = ticket.querySelector<HTMLElement>('[data-ticket-free]')!;

  const phone = window.matchMedia('(max-width: 720px)');
  const cap = () => (phone.matches ? 22 : 34);

  const engine = Engine.create({ gravity: { x: 0, y: 1.15 }, positionIterations: 8, velocityIterations: 6 });
  const world = engine.world;

  // Walls are thick and tall, so a hard throw cannot tunnel out or fly away for good.
  const T = 400;
  const wall = { isStatic: true, friction: 0.6 };
  const floor = Bodies.rectangle(0, 0, 6000, T, wall);
  const left = Bodies.rectangle(0, 0, T, 6000, wall);
  const right = Bodies.rectangle(0, 0, T, 6000, wall);
  const ceiling = Bodies.rectangle(0, 0, 6000, T, wall);
  Composite.add(world, [floor, left, right, ceiling]);

  let W = 0;
  let H = 0;
  const layout = () => {
    W = stage.clientWidth;
    H = stage.clientHeight;
    Body.setPosition(floor, { x: W / 2, y: H + T / 2 });
    Body.setPosition(left, { x: -T / 2, y: H - 3000 });
    Body.setPosition(right, { x: W + T / 2, y: H - 3000 });
    // Low enough that a hard throw comes back within a second or so, not after a trip off screen.
    Body.setPosition(ceiling, { x: W / 2, y: -H * 0.7 - T / 2 });
  };
  layout();

  const items: Item[] = [];
  let restockNo = 0;
  const fmt = new Intl.NumberFormat('fr-FR', { minimumIntegerDigits: 4, useGrouping: false });
  const updateCounter = () => {
    counter.textContent = `Restock #${fmt.format(restockNo)} :: ${items.length} pièces dans le bac`;
  };

  const render = () => {
    for (const { body, el, w, h } of items) {
      el.style.transform = `translate(${(body.position.x - w / 2).toFixed(1)}px, ${(body.position.y - h / 2).toFixed(1)}px) rotate(${body.angle.toFixed(3)}rad)`;
    }
  };

  const remove = (item: Item) => {
    Composite.remove(world, item.body);
    items.splice(items.indexOf(item), 1);
    item.el.classList.add('is-gone');
    setTimeout(() => item.el.remove(), 180);
  };

  const spawn = () => {
    const g = pick(garments);
    const unit = Math.min(92, Math.max(42, W / 8.5));
    const w = g.w * unit;
    const h = g.h * unit;
    const x = rand(w / 2 + 6, W - w / 2 - 6);
    const y = -h - rand(0, 80);

    const body = Bodies.rectangle(x, y, w * 0.9, h * 0.9, {
      chamfer: { radius: Math.min(w, h) * 0.14 },
      angle: rand(-0.7, 0.7),
      friction: 0.5,
      frictionAir: 0.014,
      restitution: 0.12,
      density: 0.0016,
    });
    Body.setAngularVelocity(body, rand(-0.06, 0.06));

    const price = pick(tags);
    const el = document.createElement('div');
    el.className = `item fill-${pick(FILLS)}`;
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
    el.dataset.id = String(body.id);
    el.innerHTML =
      `<svg viewBox="0 0 ${g.vb[0]} ${g.vb[1]}" aria-hidden="true"><path fill-rule="evenodd" d="${g.d}"/></svg>` +
      `<span class="price hand">${price}</span>`;
    // Before the fog and the beams, which sit on top of the pile.
    stage.insertBefore(el, stage.querySelector('[data-bac-over]'));

    const item: Item = { body, el, w, h, name: g.name, price, picked: false };
    items.push(item);
    Composite.add(world, body);
    restockNo++;
    if (items.length > cap()) {
      const oldest = items.find((it) => !it.el.classList.contains('is-held'));
      if (oldest) remove(oldest);
    }
    updateCounter();
    return item;
  };

  // Reduced motion: no falling. Settle the pile off screen, then show where everything landed.
  const settleNow = (steps = 420) => {
    for (let i = 0; i < steps; i++) Engine.update(engine, 1000 / 60);
    render();
  };

  // --- Loop ----------------------------------------------------------------------

  let visible = false;
  let frame = 0;
  let last = 0;
  let acc = 0;
  const STEP = 1000 / 60;
  const MAX_SPEED = 26;

  // Beams: rotation in degrees around their rig at the top. Beam 0 aims at the pointer while it is over the box.
  const aim = { x: 0, y: 0, on: false, angle: 0 };
  const paintBeams = (now: number) => {
    if (!beams.length) return;
    const t = now / 1000;
    const a = Math.sin(t * 0.55) * 22;
    const b = Math.sin(t * 0.38 + 2.1) * 26;
    let target = a;
    if (aim.on) {
      // Rotating clockwise swings the beam's far end to the left, hence the minus.
      const rig = beams[0].offsetLeft + beams[0].offsetWidth / 2;
      target = Math.max(-55, Math.min(55, (-Math.atan2(aim.x - rig, Math.max(40, aim.y)) * 180) / Math.PI));
    }
    aim.angle += (target - aim.angle) * 0.12;
    beams[0].style.rotate = `${aim.angle.toFixed(2)}deg`;
    if (beams[1]) beams[1].style.rotate = `${b.toFixed(2)}deg`;
  };
  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = stage.getBoundingClientRect();
    aim.x = e.clientX - r.left;
    aim.y = e.clientY - r.top;
    aim.on = true;
  });
  stage.addEventListener('pointerleave', () => (aim.on = false));

  const loop = (now: number) => {
    acc += Math.min(now - last, 100);
    last = now;
    while (acc >= STEP) {
      for (const { body } of items) {
        const v = body.velocity;
        const speed = Math.hypot(v.x, v.y);
        if (speed > MAX_SPEED) Body.setVelocity(body, { x: (v.x / speed) * MAX_SPEED, y: (v.y / speed) * MAX_SPEED });
      }
      Engine.update(engine, STEP);
      acc -= STEP;
    }
    render();
    if (!reduce.matches) paintBeams(now);
    frame = requestAnimationFrame(loop);
  };
  const sync = () => {
    const run = visible && !document.hidden;
    if (run && !frame) {
      last = performance.now();
      acc = 0;
      frame = requestAnimationFrame(loop);
    } else if (!run && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
  document.addEventListener('visibilitychange', sync);

  // --- Drops -----------------------------------------------------------------------

  const drop = (count: number, gap: number) => {
    if (reduce.matches) {
      for (let i = 0; i < count; i++) {
        const item = spawn();
        Body.setPosition(item.body, { x: item.body.position.x, y: rand(-H * 0.6, H * 0.3) });
      }
      settleNow();
      return;
    }
    for (let i = 0; i < count; i++) setTimeout(spawn, i * gap);
  };

  let started = false;
  let auto = 0;
  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      sync();
      if (visible && !started) {
        started = true;
        drop(phone.matches ? 10 : 15, 110);
      }
      // Restock « en continu », but only while someone is watching, and never past three quarters full.
      clearInterval(auto);
      if (visible && !reduce.matches) {
        auto = window.setInterval(() => {
          if (!document.hidden && items.length < cap() * 0.75) spawn();
        }, 2600);
      }
    },
    { threshold: 0.2 },
  ).observe(stage);

  restockBtn.addEventListener('click', () => drop(6, 90));

  shakeBtn.addEventListener('click', () => {
    for (const { body } of items) {
      Body.setVelocity(body, { x: rand(-7, 7), y: rand(-17, -8) });
      Body.setAngularVelocity(body, rand(-0.25, 0.25));
    }
    if (reduce.matches) settleNow(300);
  });

  // --- Receipt ---------------------------------------------------------------------
  // Each piece is rung up the first time it is picked. « Prix libre » counts as a piece, not in the total.

  let bagCount = 0;
  let bagTotal = 0;
  let free = 0;
  const euros = (n: number) => `${n} €`;
  const ring = (item: Item) => {
    if (item.picked) return;
    item.picked = true;
    item.el.classList.add('is-picked');
    bagCount++;
    const value = parseInt(item.price, 10);
    if (Number.isFinite(value)) bagTotal += value;
    else free++;
    const line = document.createElement('li');
    line.innerHTML = `<span class="t-name"></span><span class="t-dots"></span><span class="t-price"></span>`;
    line.querySelector('.t-name')!.textContent = item.name;
    line.querySelector('.t-price')!.textContent = item.price;
    ticketLines.append(line);
    // Only the last lines stay on the slip; the older ones have rolled out of the printer.
    while (ticketLines.children.length > 5) ticketLines.firstElementChild!.remove();
    ticket.classList.add('has-items');
    ticketCount.textContent = `${bagCount} pièce${bagCount > 1 ? 's' : ''}`;
    ticketTotal.textContent = euros(bagTotal);
    ticketFree.hidden = !free;
  };

  // --- Grab and throw ----------------------------------------------------------
  // One pointer at a time; the constraint pulls the garment by the point where it was grabbed.

  let grab: { constraint: Matter.Constraint; el: HTMLElement; pointerId: number } | null = null;
  const toStage = (e: PointerEvent) => {
    const r = stage.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  stage.addEventListener('pointerdown', (e) => {
    if (grab) return;
    const el = (e.target as HTMLElement).closest<HTMLElement>('.item');
    if (!el || el.classList.contains('is-gone')) return;
    const item = items.find((it) => it.el === el);
    if (!item) return;
    e.preventDefault();
    const p = toStage(e);
    const constraint = Constraint.create({
      pointA: p,
      bodyB: item.body,
      pointB: { x: p.x - item.body.position.x, y: p.y - item.body.position.y },
      length: 0,
      stiffness: 0.16,
      damping: 0.06,
    });
    Composite.add(world, constraint);
    el.setPointerCapture(e.pointerId);
    el.classList.add('is-held');
    grab = { constraint, el, pointerId: e.pointerId };
    ring(item);
  });

  stage.addEventListener('pointermove', (e) => {
    if (!grab || e.pointerId !== grab.pointerId) return;
    grab.constraint.pointA = toStage(e);
  });

  const release = (e: PointerEvent) => {
    if (!grab || e.pointerId !== grab.pointerId) return;
    Composite.remove(world, grab.constraint);
    grab.el.classList.remove('is-held');
    grab = null;
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);

  // --- Resize --------------------------------------------------------------------

  new ResizeObserver(() => {
    layout();
    for (const { body, w } of items) {
      const x = Math.min(W - w / 2, Math.max(w / 2, body.position.x));
      if (x !== body.position.x) Body.setPosition(body, { x, y: Math.min(body.position.y, H - 10) });
    }
    render();
  }).observe(stage);

  updateCounter();
}
