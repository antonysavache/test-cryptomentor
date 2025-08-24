import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleHeroComponent} from './components/article-hero/article-hero.component';
import {ExchangeSidebarComponent} from './components/exchange-sidebar/exchange-sidebar.component';
import {ArticleFooterComponent} from './components/article-footer/article-footer.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ArticleHeroComponent, ExchangeSidebarComponent, ArticleFooterComponent],
  templateUrl: './exchange-review.component.html',
  styleUrls: ['./exchange-review.component.scss']
})
export class ExchangeReviewComponent {

}
