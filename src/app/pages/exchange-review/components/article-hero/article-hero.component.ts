import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteConfigService} from '../../../../services/site-config.service';

@Component({
  selector: 'app-article-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-hero.component.html',
  styleUrls: ['./article-hero.component.scss']
})
export class ArticleHeroComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() lastUpdated: string = '';
  @Input() factChecked: boolean = false;
  @Input() ctaText: string = '';
  @Input() ctaLink: string = '';

  // Данные автора берутся из глобального конфига
  authorName: string = '';
  authorTitle: string = '';
  authorBio: string = '';
  authorAvatar: string = '';

  constructor(private siteConfig: SiteConfigService) {
  }

  ngOnInit() {
    const author = this.siteConfig.getAuthor();
    this.authorName = author.name;
    this.authorTitle = author.title;
    this.authorBio = author.bio;
    this.authorAvatar = author.avatar;
  }

  onCtaClick() {
    if (this.ctaLink) {
      window.open(this.ctaLink, '_blank');
    }
  }
}
