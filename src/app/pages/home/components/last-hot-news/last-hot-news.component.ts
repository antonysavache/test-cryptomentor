import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-hot-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-hot-news.component.html',
  styleUrls: ['./last-hot-news.component.scss']
})
export class LastHotNewsComponent {
  hotNews = [
    {
      title: 'Bitcoin Reaches New All-Time High',
      excerpt: 'Bitcoin has surged past $70,000 for the first time, driven by institutional adoption and ETF approvals.',
      category: 'Markets',
      time: '2h ago',
      readTime: '3 min',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Ethereum 2.0 Staking Rewards Increase',
      excerpt: 'New protocol update brings higher yields for ETH stakers as network activity reaches record levels.',
      category: 'DeFi',
      time: '4h ago',
      readTime: '5 min',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Major DeFi Protocol Launches V3',
      excerpt: 'Revolutionary features include cross-chain compatibility and enhanced yield farming opportunities.',
      category: 'DeFi',
      time: '6h ago',
      readTime: '4 min',
      image: 'https://via.placeholder.com/300x200'
    }
  ];
}
