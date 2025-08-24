import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rankings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rankings.component.html',
  styleUrls: ['./top-rankings.component.scss']
})
export class TopRankingsComponent {
  categories = [
    {
      title: 'Best for Beginners',
      exchanges: [
        { name: 'Coinbase', score: 9.1 },
        { name: 'Gemini', score: 8.8 },
        { name: 'Crypto.com', score: 8.5 }
      ]
    },
    {
      title: 'Lowest Fees',
      exchanges: [
        { name: 'Binance', score: 9.5 },
        { name: 'KuCoin', score: 9.2 },
        { name: 'Kraken', score: 8.9 }
      ]
    },
    {
      title: 'Best for Altcoins',
      exchanges: [
        { name: 'KuCoin', score: 9.3 },
        { name: 'Binance', score: 9.1 },
        { name: 'Gate.io', score: 8.7 }
      ]
    },
    {
      title: 'Best for Staking',
      exchanges: [
        { name: 'Kraken', score: 9.4 },
        { name: 'Binance', score: 9.2 },
        { name: 'KuCoin', score: 8.9 }
      ]
    },
    {
      title: 'Most Secure',
      exchanges: [
        { name: 'Kraken', score: 9.6 },
        { name: 'Coinbase', score: 9.4 },
        { name: 'Gemini', score: 9.3 }
      ]
    }
  ];
}
