import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-range-field',
  templateUrl: './range-field.component.html',
  styleUrls: ['./range-field.component.scss'],
})
export class RangeFieldComponent implements OnInit {

  value?: number;

  @Input() name?: string;
  @Input() id?: string;
  @Input() min?: number;
  @Input() max?: number;

  @Output() sliderInput = new EventEmitter<number>();

  constructor() {}

  onInput(val: number) {
    this.value = val;
    this.sliderInput.emit(val);
  }

  ngOnInit(): void {
    this.name = this.name || 'sliderName';
    this.id = this.id || 'sliderId';

    const MIN: number = this.min || 0;
    const MAX: number = this.max || 100;
    this.min = Math.min(Math.max(MIN, 0), Math.max(MAX, 1));
    this.max = Math.max(Math.max(MIN, 0), Math.max(MAX, 1));
    this.value = this.max;
    this.sliderInput.emit(this.value);

    if (MIN < 0) {
      console.warn(
        '[Range Component Slider] Issue: MIN value lesser than 0. It sets to 0'
      );
    }
    if (MAX < 1) {
      console.warn(
        '[Range Component Slider] Issue: MAX value lesser than 1. It sets to 1'
      );
    }
    if (MIN > MAX) {
      console.warn(
        '[Range Component Slider] Issue: MIN value grater than MAX. They switches their values'
      );
    }
  }
}
