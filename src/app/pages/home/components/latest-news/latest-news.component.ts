import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent {
  newsItems = [
    { time: '2h ago', title: 'Bitcoin Surges Above $68,000', sentiment: 'positive' },
    { time: '3h ago', title: 'Ethereum Network Upgrade Complete', sentiment: 'positive' },
    { time: '4h ago', title: 'Major Exchange Faces Security Issues', sentiment: 'negative' },
    { time: '5h ago', title: 'DeFi Protocol Announces New Features', sentiment: 'neutral' },
    { time: '6h ago', title: 'Regulatory News from EU', sentiment: 'neutral' },
    { time: '7h ago', title: 'NFT Market Shows Recovery Signs', sentiment: 'positive' }
  ];
}
