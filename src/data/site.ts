/**
 * Datos de contacto y enlaces de Sutara.
 * TODO: confirmar cada valor antes de publicar.
 */
export const site = {
  name: 'Sutara Founder House',
  shortName: 'Sutara',
  city: 'Bilbao',
  region: 'Bizkaia',
  foundedYear: 2026,
  // TODO: URL real del calendario / formulario de acceso en Luma
  luma: 'https://luma.com/sutara',
  // TODO: correo definitivo
  email: 'sutara.fh@gmail.com',
  // TODO: redes (dejar en '' para ocultar el enlace)
  x: '',
  linkedin: '',
  instagram: '',
} as const;

export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';
