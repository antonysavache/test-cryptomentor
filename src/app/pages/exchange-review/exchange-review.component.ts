import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleHeroComponent } from '../../components/article-hero/article-hero.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ArticleHeroComponent],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}
