import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exchange-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exchange-categories.component.html',
  styleUrls: ['./exchange-categories.component.scss']
})
export class ExchangeCategoriesComponent {
  categories = [
    {
      title: 'Beginners',
      description: 'User-friendly exchanges perfect for crypto newcomers',
      icon: '🌟',
      link: '/best-exchanges-for-beginners',
      color: '#3b82f6'
    },
    {
      title: 'Pro Traders',
      description: 'Advanced tools and features for experienced traders',
      icon: '📊',
      link: '/best-exchanges-for-traders',
      color: '#8b5cf6'
    },
    {
      title: 'Low Fees',
      description: 'Exchanges with the most competitive trading fees',
      icon: '💰',
      link: '/lowest-fee-exchanges',
      color: '#10b981'
    },
    {
      title: 'Altcoins',
      description: 'Best selection of alternative cryptocurrencies',
      icon: '🚀',
      link: '/best-altcoin-exchanges',
      color: '#f59e0b'
    },
    {
      title: 'Staking',
      description: 'Earn rewards by staking your cryptocurrencies',
      icon: '🏆',
      link: '/best-staking-exchanges',
      color: '#ef4444'
    },
    {
      title: 'Futures',
      description: 'Derivatives trading with leverage options',
      icon: '⚡',
      link: '/best-futures-exchanges',
      color: '#06b6d4'
    },
    {
      title: 'US-Friendly',
      description: 'Fully compliant exchanges for US residents',
      icon: '🇺🇸',
      link: '/us-crypto-exchanges',
      color: '#dc2626'
    },
    {
      title: 'EU-Friendly',
      description: 'MiCA compliant exchanges for European users',
      icon: '🇪🇺',
      link: '/eu-crypto-exchanges',
      color: '#2563eb'
    }
  ];
}
