import { siteConfig } from "@/content/site";

export function createWhatsappUrl(message?: string): string {
  const phone = siteConfig.whatsappNumber;
  const text = message ?? siteConfig.whatsappMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
