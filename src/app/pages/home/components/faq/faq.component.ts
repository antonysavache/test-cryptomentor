import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  faqs: FAQItem[] = [
    {
      question: 'How do you choose which crypto exchanges to review?',
      answer: `We review exchanges based on several criteria: minimum trading volume of $100M daily, 
               regulatory compliance in major jurisdictions, operational history of at least 1 year, 
               and significant user base. We prioritize exchanges that serve retail traders and offer 
               a wide range of cryptocurrencies.`,
      isOpen: false
    },
    {
      question: 'Are your exchange reviews biased or sponsored?',
      answer: `Our reviews are completely independent and unbiased. While we may earn affiliate commissions 
               when users sign up through our links, this never influences our ratings or recommendations. 
               Our scoring methodology is automated and based on quantifiable metrics, not subjective opinions.`,
      isOpen: false
    },
    {
      question: 'How often do you update your exchange reviews?',
      answer: `We update our reviews quarterly to reflect changes in fees, features, security measures, 
               and regulatory status. Major incidents or significant changes trigger immediate review updates. 
               Our team continuously monitors exchanges for any changes that might affect user experience.`,
      isOpen: false
    },
    {
      question: 'What should beginners look for in a crypto exchange?',
      answer: `Beginners should prioritize: strong regulatory compliance and licensing, user-friendly interface, 
               educational resources, responsive customer support, reasonable fees for small trades, and robust 
               security features like 2FA. Avoid exchanges with complex derivatives until you gain experience.`,
      isOpen: false
    },
    {
      question: 'How do you verify the accuracy of exchange information?',
      answer: `We verify information through multiple methods: direct testing with real accounts, official 
               exchange documentation review, regulatory filing analysis, and cross-referencing with third-party 
               data providers. Our team conducts live trades and tests customer support response times regularly.`,
      isOpen: false
    }
  ];

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
    
    // Close other FAQs (optional - for accordion behavior)
    // this.faqs.forEach((faq, i) => {
    //   if (i !== index) {
    //     faq.isOpen = false;
    //   }
    // });
  }

  getOpenFAQs(): number {
    return this.faqs.filter(faq => faq.isOpen).length;
  }
}
