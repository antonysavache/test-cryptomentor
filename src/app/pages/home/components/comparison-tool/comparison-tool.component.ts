import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparison-tool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparison-tool.component.html',
  styleUrls: ['./comparison-tool.component.scss']
})
export class ComparisonToolComponent {
  // @Input() title = 'Compare Exchanges Side by Side';
  // @Input() subtitle = 'Select any two exchanges to see detailed feature comparisons';
  // @Input() popularComparisons: Comparison[] = [];
  // @Input() comparisonFeatures = [
  //   'Trading Fees',
  //   'Supported Coins',
  //   'Security Features',
  //   'Mobile App',
  //   'Customer Support'
  // ];
  //
  // @Output() startComparison = new EventEmitter<{exchange1: string, exchange2: string}>();
  // @Output() popularComparisonClick = new EventEmitter<Comparison>();
  //
  // selectedExchange1 = '';
  // selectedExchange2 = '';
  //
  // onStartComparison(): void {
  //   if (this.selectedExchange1 && this.selectedExchange2) {
  //     this.startComparison.emit({
  //       exchange1: this.selectedExchange1,
  //       exchange2: this.selectedExchange2
  //     });
  //   }
  // }
  //
  // onPopularComparisonClick(comparison: Comparison): void {
  //   this.popularComparisonClick.emit(comparison);
  // }
}
