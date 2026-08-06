export const homepageIconKitVersion = '2.0.0';

export const homepageIconOptions = [
  { id: 'photo', label: 'Photo', filename: 'photo.svg' },
  { id: 'video', label: 'Vidéo', filename: 'video.svg' },
  { id: 'vocal', label: 'Vocal', filename: 'vocal.svg' },
  { id: 'ai-prepare', label: 'IA prépare', filename: 'ai-prepare.svg' },
  { id: 'validation', label: 'Validation', filename: 'validation.svg' },
  { id: 'publication', label: 'Publication', filename: 'publication.svg' },
  { id: 'scheduling', label: 'Programmation', filename: 'scheduling.svg' },
  { id: 'google-business', label: 'Google Business', filename: 'google-business.svg' },
  { id: 'review-stars', label: 'Avis étoiles', filename: 'review-stars.svg' },
  { id: 'sms', label: 'SMS', filename: 'sms.svg' },
  { id: 'instagram', label: 'Instagram', filename: 'instagram.svg' },
  { id: 'facebook', label: 'Facebook', filename: 'facebook.svg' },
  { id: 'linkedin', label: 'LinkedIn', filename: 'linkedin.svg' },
  { id: 'tiktok', label: 'TikTok', filename: 'tiktok.svg' },
  { id: 'youtube', label: 'YouTube', filename: 'youtube.svg' },
  { id: 'retouch', label: 'Retouche', filename: 'retouch.svg' },
  { id: 'before-after', label: 'Avant-Après', filename: 'before-after.svg' },
  { id: 'carousel', label: 'Carrousel', filename: 'carousel.svg' },
  { id: 'calendar', label: 'Calendrier', filename: 'calendar.svg' },
  { id: 'local-proof', label: 'Preuve locale', filename: 'local-proof.svg' },
  { id: 'growth', label: 'Croissance', filename: 'growth.svg' },
  { id: 'visibility', label: 'Visibilité', filename: 'visibility.svg' },
  { id: 'check', label: 'Check', filename: 'check.svg' },
  { id: 'tool-artisan', label: 'Outil artisan', filename: 'tool-artisan.svg' },
  { id: 'waveform', label: 'Waveform vocal', filename: 'waveform.svg' },
  { id: 'upload', label: 'Upload', filename: 'upload.svg' },
] as const;

export type HomepageIconId = (typeof homepageIconOptions)[number]['id'];

export const homepageIconIds = ['photo', 'video', 'vocal', 'ai-prepare', 'validation', 'publication', 'scheduling', 'google-business', 'review-stars', 'sms', 'instagram', 'facebook', 'linkedin', 'tiktok', 'youtube', 'retouch', 'before-after', 'carousel', 'calendar', 'local-proof', 'growth', 'visibility', 'check', 'tool-artisan', 'waveform', 'upload'] as const;

export const homepageIconIdSet = new Set<string>(homepageIconIds);

export const defaultHomepageIcon: HomepageIconId = 'check';
