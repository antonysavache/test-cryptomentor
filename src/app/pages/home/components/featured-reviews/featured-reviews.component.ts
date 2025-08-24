import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  id: string;
  name: string;
  logo: string;
  rating: number;
  badges: string[];
  description: string;
  pros: string[];
  cons: string[];
  updatedDate: string;
  url: string;
  featured: boolean;
}

@Component({
  selector: 'app-featured-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-reviews.component.html',
  styleUrls: ['./featured-reviews.component.scss']
})
export class FeaturedReviewsComponent {
  @Input() maxReviews: number = 6;

  reviews: Review[] = [
    {
      id: 'binance',
      name: 'Binance',
      logo: '/assets/logos/binance.png',
      rating: 9.2,
      badges: ["Editor's Choice", 'Lowest Fees'],
      description: 'The world\'s largest cryptocurrency exchange by trading volume, offering comprehensive trading features and competitive fees.',
      pros: ['Lowest trading fees (0.1%)', '350+ cryptocurrencies', 'Advanced trading tools', 'High liquidity'],
      cons: ['Complex for beginners', 'Regulatory scrutiny', 'Limited customer support'],
      updatedDate: '2024-01-15',
      url: '/reviews/binance',
      featured: true
    },
    {
      id: 'coinbase',
      name: 'Coinbase',
      logo: '/assets/logos/coinbase.png',
      rating: 8.7,
      badges: ['Best for Beginners', 'US Regulated'],
      description: 'User-friendly platform perfect for crypto beginners with strong regulatory compliance and educational resources.',
      pros: ['Beginner-friendly', 'Strong regulation', 'Educational content', 'Insurance coverage'],
      cons: ['Higher fees', 'Limited altcoins', 'Slower customer support'],
      updatedDate: '2024-01-12',
      url: '/reviews/coinbase',
      featured: true
    },
    {
      id: 'kraken',
      name: 'Kraken',
      logo: '/assets/logos/kraken.png',
      rating: 8.9,
      badges: ['Most Secure', 'Pro Trading'],
      description: 'Established exchange known for security, advanced trading features, and strong regulatory compliance.',
      pros: ['Top-tier security', 'Low fees', 'Margin trading', '24/7 support'],
      cons: ['Complex interface', 'Limited payment methods', 'Slower verification'],
      updatedDate: '2024-01-10',
      url: '/reviews/kraken',
      featured: true
    },
    {
      id: 'kucoin',
      name: 'KuCoin',
      logo: '/assets/logos/kucoin.png',
      rating: 8.4,
      badges: ['Best Altcoins', 'High Yield'],
      description: 'Popular exchange offering a vast selection of altcoins and innovative trading features with competitive rates.',
      pros: ['700+ cryptocurrencies', 'Trading bots', 'Staking rewards', 'Low fees'],
      cons: ['Limited regulation', 'Complex features', 'Withdrawal limits'],
      updatedDate: '2024-01-08',
      url: '/reviews/kucoin',
      featured: true
    },
    {
      id: 'gemini',
      name: 'Gemini',
      logo: '/assets/logos/gemini.png',
      rating: 8.5,
      badges: ['Regulated', 'Institutional'],
      description: 'New York-regulated exchange focusing on security and compliance for both retail and institutional traders.',
      pros: ['Full regulation', 'Insurance coverage', 'Security focus', 'Institutional grade'],
      cons: ['Higher fees', 'Limited coins', 'Geographic restrictions'],
      updatedDate: '2024-01-06',
      url: '/reviews/gemini',
      featured: true
    },
    {
      id: 'bybit',
      name: 'Bybit',
      logo: '/assets/logos/bybit.png',
      rating: 8.3,
      badges: ['Derivatives', 'High Leverage'],
      description: 'Derivatives-focused platform offering futures and options trading with up to 100x leverage.',
      pros: ['High leverage', 'Fast execution', 'Copy trading', 'Mobile app'],
      cons: ['Derivatives focus', 'Regulatory risks', 'Complex for beginners'],
      updatedDate: '2024-01-04',
      url: '/reviews/bybit',
      featured: true
    }
  ];

  getFeaturedReviews(): Review[] {
    return this.reviews.filter(review => review.featured).slice(0, this.maxReviews);
  }

  getStarArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = (rating % 2) >= 1;
    const stars: boolean[] = [];

    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars || (i === fullStars && hasHalfStar));
    }

    return stars;
  }

  getBadgeColor(badge: string): string {
    const colors: { [key: string]: string } = {
      "Editor's Choice": 'bg-orange-100 text-orange-800',
      'Lowest Fees': 'bg-green-100 text-green-800',
      'Best for Beginners': 'bg-blue-100 text-blue-800',
      'US Regulated': 'bg-purple-100 text-purple-800',
      'Most Secure': 'bg-red-100 text-red-800',
      'Pro Trading': 'bg-gray-100 text-gray-800',
      'Best Altcoins': 'bg-yellow-100 text-yellow-800',
      'High Yield': 'bg-indigo-100 text-indigo-800',
      'Regulated': 'bg-purple-100 text-purple-800',
      'Institutional': 'bg-gray-100 text-gray-800',
      'Derivatives': 'bg-red-100 text-red-800',
      'High Leverage': 'bg-orange-100 text-orange-800'
    };

    return colors[badge] || 'bg-gray-100 text-gray-800';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
