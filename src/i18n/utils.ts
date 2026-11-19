import { es } from './es';
import { en } from './en';
import type { Dictionary } from './types';
import { defaultLocale, locales, type Locale } from '../data/site';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

export function getLocale(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Prefijo de despliegue (BASE_PATH en GitHub Pages sin dominio propio), sin barra final. */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta localizada con barra final (trailingSlash: 'always'), incluyendo el base. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${base}/${locale}/${clean}/` : `${base}/${locale}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export const htmlLang: Record<Locale, string> = { es: 'es-ES', en: 'en' };

/** Texto bilingüe de los JSON de datos ({ es, en }). */
export type Localized = Record<Locale, string>;
export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value[defaultLocale];
}

/** "26.11" para las tarjetas, "jueves 26 de noviembre de 2026" para el texto largo. */
export function formatDate(iso: string, locale: Locale, style: 'short' | 'long' | 'weekday' = 'long') {
  const date = new Date(`${iso}T12:00:00`);
  if (style === 'short') {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    return `${d}.${m}`;
  }
  const options: Intl.DateTimeFormatOptions =
    style === 'weekday'
      ? { weekday: 'long', day: 'numeric', month: 'long' }
      : { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat(htmlLang[locale], options).format(date);
}
