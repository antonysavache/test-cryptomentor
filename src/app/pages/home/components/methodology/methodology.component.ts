import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Criterion {
  name: string;
  description: string;
  weight: number;
  icon: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent {
  criteria: Criterion[] = [
    {
      name: 'Security',
      description: 'Multi-factor authentication, cold storage, insurance coverage, and regulatory compliance',
      weight: 25,
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      name: 'Liquidity',
      description: 'Trading volume, market depth, spread tightness, and order book quality assessment',
      weight: 20,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      name: 'Regulation',
      description: 'Licensing status, regulatory compliance, and jurisdiction-specific requirements',
      weight: 20,
      icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2h-2a2 2 0 00-2 2v2'
    },
    {
      name: 'User Experience',
      description: 'Interface design, mobile apps, ease of use, customer support quality and response times',
      weight: 20,
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
    },
    {
      name: 'Fees',
      description: 'Trading fees, deposit/withdrawal costs, and overall cost-effectiveness analysis',
      weight: 15,
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
    }
  ];

  methodology = {
    intro: `Our comprehensive review methodology ensures that every crypto exchange evaluation is thorough, 
            objective, and based on real-world testing. We analyze over 50 different factors across five 
            key categories to provide you with accurate, unbiased ratings.`,
    process: `Each exchange undergoes a rigorous 30-day testing period where our expert reviewers conduct 
             live trades, test customer support, analyze security measures, and evaluate the overall 
             user experience. We update our reviews quarterly to reflect changes in features and performance.`,
    transparency: `All reviews are conducted independently. While we may earn commissions from some exchanges, 
                  this never influences our ratings or recommendations. Our scoring system is fully automated 
                  and based on quantifiable metrics.`
  };

  getWeightColor(weight: number): string {
    if (weight >= 25) return 'bg-red-500';
    if (weight >= 20) return 'bg-orange-500';
    if (weight >= 15) return 'bg-yellow-500';
    return 'bg-green-500';
  }
}
