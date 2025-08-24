import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleHeroComponent} from './components/article-hero/article-hero.component';
import {ExchangeSidebarComponent} from './components/exchange-sidebar/exchange-sidebar.component';
import {ArticleFooterComponent} from './components/article-footer/article-footer.component';
import {
  HighLevelCompareTwoCardsComponent
} from '../../shared/components/high-level-compare-two-cards/high-level-compare-two-cards.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ArticleHeroComponent, ExchangeSidebarComponent, ArticleFooterComponent, HighLevelCompareTwoCardsComponent],
  templateUrl: './exchange-review.component.html',
  styleUrls: ['./exchange-review.component.scss']
})
export class ExchangeReviewComponent {
  prosData = [
    { header: 'Непревзойденная ликвидность', text: 'Binance остается биржей №1 по объему торгов...' },
    { header: 'Огромный выбор активов', text: 'Более 500+ криптовалют...' }
    // и так далее
  ];

  consData = [
    { header: 'Регуляторное давление', text: 'Новые законы, как MiCA в Европе...' },
    // и так далее
  ];

  whoShouldUseBinanceData = [
    {
      header: 'Активным трейдерам и скальперам',
      text: 'Из-за сверхнизких комиссий на фьючерсы и высокой ликвидности'
    },
    {
      header: '"Охотникам за гемами"',
      text: 'Огромный выбор альткоинов и доступ к новым проектам через Launchpad'
    },
    {
      header: 'Долгосрочным инвесторам',
      text: 'Широкие возможности для пассивного дохода через Binance Earn'
    },
    {
      header: 'Пользователям за пределами ограниченных регионов',
      text: 'Которые хотят доступ ко всей экосистеме'
    }
  ];

  whoShouldAvoidBinanceData = [
    {
      header: 'Абсолютным новичкам',
      text: 'Которых пугает сложность — Coinbase или Kraken могут быть лучшим стартом'
    },
    {
      header: 'Пользователям из США, Канады, Великобритании',
      text: 'Глобальная платформа недоступна, локальные версии сильно урезаны'
    },
    {
      header: 'Максималистам безопасности и децентрализации',
      text: 'Лучше использовать DEX в связке с холодным кошельком'
    }
  ];

}
