import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {FeaturedReviewsComponent} from './components/featured-reviews/featured-reviews.component';
import {TopRankingsComponent} from './components/top-rankings/top-rankings.component';
import {ComparisonToolComponent} from './components/comparison-tool/comparison-tool.component';
import {FindByNeedComponent} from './components/find-by-need/find-by-need.component';
import {BeginnerGuidesComponent} from './components/beginner-guides/beginner-guides.component';
import {MethodologyComponent} from './components/methodology/methodology.component';
import {FAQComponent} from './components/faq/faq.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeaturedReviewsComponent,
    TopRankingsComponent,
    ComparisonToolComponent,
    FindByNeedComponent,
    BeginnerGuidesComponent,
    MethodologyComponent,
    FAQComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  onSearchQuery(query: string): void {
    // Handle search functionality
    console.log('Search query:', query);
    // Navigate to search results or filter exchanges
  }

  onExchangeSelected(exchangeName: string): void {
    // Handle exchange selection
    console.log('Exchange selected:', exchangeName);
    // Navigate to exchange details or reviews
  }
}
