import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteConfigService} from '../../../../services/site-config.service';

interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

@Component({
    selector: 'app-article-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article-footer.component.html',
    styleUrls: ['./article-footer.component.scss']
})
export class ArticleFooterComponent implements OnInit {
    @Input() disclaimerText: string = `The content published on this website is not aimed to give any kind of financial, investment, trading, or any other form of advice. CryptoMentor.org does not endorse or suggest you to buy, sell or hold any kind of cryptocurrency. Before making financial investment decisions, do consult your financial advisor.`;
    @Input() expertContributorsLink: string = '#';

    // Данные автора из глобального конфига
    authorName: string = '';
    authorTitle: string = '';
    authorBio: string = '';
    authorAvatar: string = '';
    authorFullBio: string = '';

    // Социальные сети автора
    socialLinks: SocialLink[] = [
        {
            platform: 'LinkedIn',
            url: '#',
            icon: '🔗'
        },
        {
            platform: 'Twitter',
            url: '#',
            icon: '🐦'
        }
    ];

    // Научные ссылки
    scientificReferences: string[] = [
        `N. Mansoor, K. F. Antora, P. Deb, et al.: 'Review of blockchain approaches for KYC';`,
        `A. Brauneis, R. Mestel, R. Riordan, et al.: 'The anatomy of a fee change—evidence from cryptocurrency markets'.`
    ];

    constructor(private siteConfig: SiteConfigService) {
    }

    ngOnInit() {
        const author = this.siteConfig.getAuthor();
        this.authorName = author.name;
        this.authorTitle = author.title;
        this.authorBio = author.bio;
        this.authorAvatar = author.avatar;
        this.authorFullBio = author.fullBio || author.bio;
    }

    onSocialLinkClick(url: string) {
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    }

    onExpertContributorsClick() {
        if (this.expertContributorsLink && this.expertContributorsLink !== '#') {
            window.open(this.expertContributorsLink, '_blank');
        }
    }

    onFullBioClick() {
        // Логика для показа полной биографии
        console.log('Show full bio');
    }
}
