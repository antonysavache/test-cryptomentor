import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Exchange {
  id: string;
  name: string;
  rating: number;
  badges: string[];
  description: string;
  pros: string[];
  cons: string[];
  updatedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private exchanges: Exchange[] = [
    {
      id: 'binance',
      name: 'Binance',
      rating: 9.2,
      badges: ["Editor's Choice", "Lowest Fees"],
      description: "World's largest crypto exchange by trading volume",
      pros: ["Lowest fees", "350+ cryptocurrencies", "Advanced tools"],
      cons: ["Complex interface", "Regulatory issues"],
      updatedDate: "2024-01-15"
    },
    {
      id: 'coinbase',
      name: 'Coinbase',
      rating: 8.7,
      badges: ["Best for Beginners", "US Regulated"],
      description: "User-friendly platform for crypto beginners",
      pros: ["Easy to use", "Strong regulation", "Educational content"],
      cons: ["Higher fees", "Limited altcoins"],
      updatedDate: "2024-01-12"
    },
    {
      id: 'kraken',
      name: 'Kraken',
      rating: 8.9,
      badges: ["Most Secure", "Pro Trading"],
      description: "Established exchange known for security",
      pros: ["Top security", "Low fees", "24/7 support"],
      cons: ["Complex interface", "Slower verification"],
      updatedDate: "2024-01-10"
    }
  ];

  getExchanges(): Observable<Exchange[]> {
    return of(this.exchanges);
  }

  getFeaturedExchanges(): Observable<Exchange[]> {
    return of(this.exchanges.slice(0, 6));
  }

  getExchangeById(id: string): Observable<Exchange | undefined> {
    return of(this.exchanges.find(exchange => exchange.id === id));
  }
}
