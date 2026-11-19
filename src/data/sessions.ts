import raw from './sessions.json';
import type { Localized } from '../i18n/utils';

export interface ProgramItem {
  kind: 'talk' | 'qa' | 'networking' | 'office-hours' | 'demo' | 'other';
  title: Localized;
  detail: Localized;
  speaker: string | null;
  duration: string | null;
}

export interface Session {
  number: string;
  slug: string;
  status: 'upcoming' | 'past';
  name: Localized;
  format: Localized;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  city: string;
  venue: Localized;
  spots: number;
  luma: string;
  program: ProgramItem[];
}

export const sessions = raw.sessions as Session[];

/** La próxima sesión: la primera 'upcoming' por fecha. */
export const nextSession: Session | undefined = sessions
  .filter((s) => s.status === 'upcoming')
  .sort((a, b) => a.date.localeCompare(b.date))[0];
