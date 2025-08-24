import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PopularExchange {
  name: string;
  url: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() title: string = 'Find the Best Crypto Exchange for You';
  @Input() subtitle: string = 'Compare fees, security, and features to choose the perfect crypto trading platform';
  @Input() searchPlaceholder: string = 'Search exchanges (e.g., Binance, Coinbase...)';

  @Output() searchQuery = new EventEmitter<string>();
  @Output() exchangeSelected = new EventEmitter<string>();

  searchTerm: string = '';

  popularExchanges: PopularExchange[] = [
    { name: 'Binance', url: '/reviews/binance' },
    { name: 'Coinbase', url: '/reviews/coinbase' },
    { name: 'Kraken', url: '/reviews/kraken' },
    { name: 'KuCoin', url: '/reviews/kucoin' }
  ];

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.searchQuery.emit(this.searchTerm.trim());
    }
  }

  onExchangeClick(exchangeName: string): void {
    this.exchangeSelected.emit(exchangeName);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}
