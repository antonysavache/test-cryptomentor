import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CompareItem {
  header: string;
  text: string;
}

@Component({
  selector: 'app-high-level-compare-two-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './high-level-compare-two-cards.component.html',
  styleUrls: ['./high-level-compare-two-cards.component.scss']
})
export class HighLevelCompareTwoCardsComponent {
  @Input() prosMainHeader: string = '';
  @Input() consMainHeader: string = '';
  @Input() pros: CompareItem[] = [];
  @Input() cons: CompareItem[] = [];
}
