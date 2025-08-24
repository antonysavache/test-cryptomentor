import { Component } from '@angular/core';
import {PageWrapperComponent} from './shared/components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageWrapperComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'crypto-mentor';
}
