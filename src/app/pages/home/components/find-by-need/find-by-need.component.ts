import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NeedCategory {
  title: string;
  description: string;
  icon: string;
  popular: boolean;
  url: string;
  benefits: string[];
}

@Component({
  selector: 'app-find-by-need',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-by-need.component.html',
  styleUrls: ['./find-by-need.component.scss']
})
export class FindByNeedComponent {
  categories: NeedCategory[] = [
    {
      title: 'Low Fees',
      description: 'Exchanges with the lowest trading fees and minimal spreads',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
      popular: true,
      url: '/rankings/low-fees',
      benefits: ['0.1% trading fees', 'Volume discounts', 'No deposit fees']
    },
    {
      title: 'Best UX',
      description: 'User-friendly interfaces perfect for beginners and pros',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      popular: true,
      url: '/rankings/best-ux',
      benefits: ['Intuitive design', 'Mobile apps', '24/7 support']
    },
    {
      title: 'DeFi Trading',
      description: 'Access to decentralized finance tokens and yield farming',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      popular: false,
      url: '/rankings/defi-trading',
      benefits: ['DeFi tokens', 'Yield farming', 'Liquidity mining']
    },
    {
      title: 'NFT Trading',
      description: 'Platforms specializing in NFT marketplaces and trading',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      popular: false,
      url: '/rankings/nft-trading',
      benefits: ['NFT marketplace', 'Low mint fees', 'Creator tools']
    },
    {
      title: 'Staking Rewards',
      description: 'Earn passive income with the highest staking rewards',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      popular: true,
      url: '/rankings/staking',
      benefits: ['Up to 20% APY', 'Multiple tokens', 'Flexible terms']
    },
    {
      title: 'Derivatives',
      description: 'Advanced trading with futures, options, and leverage',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      popular: false,
      url: '/rankings/derivatives',
      benefits: ['Futures trading', '100x leverage', 'Options contracts']
    }
  ];

  getPopularCategories(): NeedCategory[] {
    return this.categories.filter(category => category.popular);
  }

  getAllCategories(): NeedCategory[] {
    return this.categories;
  }
}
