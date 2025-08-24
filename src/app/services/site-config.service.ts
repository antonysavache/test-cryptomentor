import { Injectable } from '@angular/core';
import {SITE_CONFIG} from '../shared/config/site.config';

export interface AuthorConfig {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  fullBio?: string;
}

export interface SiteConfig {
  author: AuthorConfig;
  siteName: string;
  siteUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {
  private config: SiteConfig = {
    author: SITE_CONFIG.author,
    siteName: SITE_CONFIG.site.name,
    siteUrl: SITE_CONFIG.site.url
  };

  getAuthor(): AuthorConfig {
    return this.config.author;
  }

  getSiteConfig(): SiteConfig {
    return this.config;
  }

  getDefaultDisclaimerText(): string {
    return SITE_CONFIG.site.defaultDisclaimerText;
  }

  getDefaultCtaText(): string {
    return SITE_CONFIG.site.defaultCtaText;
  }

  getDefaultCtaLink(): string {
    return SITE_CONFIG.site.defaultCtaLink;
  }

  // Метод для обновления конфигурации (если понадобится)
  updateAuthor(author: Partial<AuthorConfig>): void {
    this.config.author = { ...this.config.author, ...author };
  }
}
