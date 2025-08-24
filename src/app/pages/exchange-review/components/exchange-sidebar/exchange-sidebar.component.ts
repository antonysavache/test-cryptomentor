import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

interface ExchangeRecommendation {
    name: string;
    logo: string;
    rating: number;
    link: string;
}

interface ReviewStep {
    step: number;
    title: string;
    description: string;
}

@Component({
    selector: 'app-exchange-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exchange-sidebar.component.html',
    styleUrls: ['./exchange-sidebar.component.scss']
})
export class ExchangeSidebarComponent {
    @Input() title: string = 'TOP3 Recommended Crypto Exchanges:';

    // Рекомендуемые биржи
    exchanges: ExchangeRecommendation[] = [
        {
            name: 'BINANCE',
            logo: '🟡', // Заглушка для логотипа
            rating: 9.8,
            link: '#'
        },
        {
            name: 'BYBIT',
            logo: '⚫', // Заглушка для логотипа
            rating: 9.6,
            link: '#'
        },
        {
            name: 'KRAKEN',
            logo: '🟣', // Заглушка для логотипа
            rating: 9.4,
            link: '#'
        }
    ];

    // Шаги процесса обзора
    reviewSteps: ReviewStep[] = [
        {
            step: 1,
            title: 'Collect data based on user reviews.',
            description: ''
        },
        {
            step: 2,
            title: 'Investigate the crypto exchanges online.',
            description: ''
        },
        {
            step: 3,
            title: 'Usually, test the crypto exchanges ourselves.',
            description: ''
        },
        {
            step: 4,
            title: 'Evaluate & rank online crypto exchanges.',
            description: ''
        },
        {
            step: 5,
            title: 'Publish crypto exchange reviews & guides.',
            description: ''
        }
    ];

    onExchangeClick(link: string) {
        if (link && link !== '#') {
            window.open(link, '_blank');
        }
    }

    onSeeMoreClick() {
        // Логика для перехода к списку всех бирж
        console.log('Navigate to best-rated exchanges');
    }
}
