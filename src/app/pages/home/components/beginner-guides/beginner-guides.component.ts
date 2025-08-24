import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Guide {
  title: string;
  description: string;
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  url: string;
}

@Component({
  selector: 'app-beginner-guides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beginner-guides.component.html',
  styleUrls: ['./beginner-guides.component.scss']
})
export class BeginnerGuidesComponent {
  guides: Guide[] = [
    {
      title: 'How to Buy Bitcoin Safely',
      description: 'Complete step-by-step guide to purchasing your first Bitcoin securely',
      readTime: '8 min read',
      level: 'Beginner',
      url: '/guides/how-to-buy-bitcoin-safely'
    },
    {
      title: 'What is DeFi?',
      description: 'Understanding decentralized finance and its key components',
      readTime: '12 min read',
      level: 'Beginner',
      url: '/guides/what-is-defi'
    },
    {
      title: 'How to Choose an Exchange',
      description: 'Essential factors to consider when selecting a crypto exchange',
      readTime: '15 min read',
      level: 'Beginner',
      url: '/guides/how-to-choose-exchange'
    },
    {
      title: 'Crypto Wallet Security',
      description: 'Best practices for keeping your cryptocurrency safe',
      readTime: '10 min read',
      level: 'Intermediate',
      url: '/guides/crypto-wallet-security'
    }
  ];

  getLevelColor(level: string): string {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[level as keyof typeof colors] || colors['Beginner'];
  }
}
