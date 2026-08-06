export const v31SocialNetworks = [
  { id: 'facebook', label: 'Facebook', src: '/social/facebook-official.svg' },
  { id: 'instagram', label: 'Instagram', src: '/social/instagram-official.svg' },
  { id: 'linkedin', label: 'LinkedIn', src: '/social/linkedin-official.svg' },
  { id: 'google', label: 'Google Business', src: '/social/google-official.svg' },
  { id: 'tiktok', label: 'TikTok', src: '/social/tiktok-official.svg' },
  { id: 'youtube', label: 'YouTube', src: '/social/youtube-official.svg' },
] as const;

export type V31SocialNetwork = (typeof v31SocialNetworks)[number];
