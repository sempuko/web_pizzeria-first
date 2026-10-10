import { hours } from '../content/site';

const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

// Wall-clock time in Lyon, whatever the visitor's own timezone.
export function parisNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, time: Number(get('hour')) + Number(get('minute')) / 60 };
}

const clock = (t: number) => {
  const h = Math.floor(t);
  const m = Math.round((t - h) * 60);
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
};

const service = (start: number) => (start < 17 ? 'midi' : 'soir');

export type Status = { open: boolean; text: string };

export function status(now = parisNow()): Status {
  const today = hours[now.day] ?? [];

  const current = today.find(([a, b]) => now.time >= a && now.time < b);
  if (current) return { open: true, text: `Ouvert, jusqu’à ${clock(current[1])}` };

  const later = today.find(([a]) => now.time < a);
  if (later) {
    const when = later[0] < 17 ? 'ce midi' : 'ce soir';
    return { open: false, text: `Ouvert ${when} dès ${clock(later[0])}` };
  }

  for (let i = 1; i <= 7; i++) {
    const day = (now.day + i) % 7;
    const next = hours[day]?.[0];
    if (!next) continue;
    const name = i === 1 ? 'demain' : days[day];
    return { open: false, text: `Fermé, on rouvre ${name} ${service(next[0])}` };
  }
  return { open: false, text: 'Fermé' };
}

// Evening light on the façade: from 18h30 until early morning.
export const isEvening = (now = parisNow()) => now.time >= 18.5 || now.time < 6;
