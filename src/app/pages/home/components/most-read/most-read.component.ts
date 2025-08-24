import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-most-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.scss']
})
export class MostReadComponent {
  mostRead = [
    {
      rank: 1,
      title: 'Complete Guide to DeFi Yield Farming in 2024',
      description: 'Everything you need to know about maximizing returns in decentralized finance protocols.',
      time: '2 days ago',
      image: 'https://via.placeholder.com/120x80'
    },
    {
      rank: 2,
      title: 'Bitcoin vs Ethereum: Investment Analysis',
      description: 'Comprehensive comparison of the two largest cryptocurrencies by market cap.',
      time: '1 day ago',
      image: 'https://via.placeholder.com/120x80'
    },
    {
      rank: 3,
      title: 'Top 10 Altcoins to Watch This Month',
      description: 'Our picks for the most promising alternative cryptocurrencies.',
      time: '3 days ago',
      image: 'https://via.placeholder.com/120x80'
    }
  ];
}
