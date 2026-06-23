export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  whatsappNumber: string;
  whatsappMessage: string;
  communityUrl: string;
  email?: string;
  copyrightYear: number;
  socials: {
    instagram?: string;
    tiktok?: string;
    facebook?: string;
    github?: string;
    twitter?: string;
  };
};

export type SeoPage = {
  title: string;
  description: string;
  ogImage?: string;
};

export type SeoConfig = {
  home: SeoPage;
  services: SeoPage;
  blog: SeoPage;
  about: SeoPage;
};
