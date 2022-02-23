import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range-labeled-field.component.html',
  styleUrls: ['./range-labeled-field.component.scss'],
})
export class RangeLabeledFieldComponent implements OnInit {
  minValue?: number;
  maxValue?: number;
  labelText?: string;
  /* pseudo - unique random value */
  generatedId = `sliderID-${Date.now()}.${Math.random().toString().slice(10)}`;

  @Input() defaultMin?: number;
  @Input() defaultMax?: number;
  @Input() name?: string;
  @Input() labelTextSuffix?: string;
  @Input() value?: number;
  @Output() valueChange = new EventEmitter<number>();
  @Input() isMaxed?: boolean;
  @Output() isMaxedChange = new EventEmitter<boolean>();

  onSubmitRange(range: { min: number; max: number }) {
    this.minValue = range.min;
    this.maxValue = range.max;
  }

  onSliderInput(sliderValue: number) {
    this.value = sliderValue;
    this.valueChange.emit(this.value);
    this.labelText = this.labelTextSuffix + ' (up to): ' + this.value;
    // console.log('[Range Field] Output:', this.value);

    if (this.maxValue && this.maxValue === sliderValue) {
      this.isMaxedChange.emit(true);
      this.labelText = 'Any ' + this.labelTextSuffix;
      // console.log('[Range Field] Output:', this.labelText);
    } else {
      this.isMaxedChange.emit(false);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.defaultMin = this.defaultMin ?? 0;
    this.defaultMax = this.defaultMax ?? 100;
    this.minValue = this.minValue ?? this.defaultMin ?? 0;
    this.maxValue = this.maxValue ?? this.defaultMax ?? 100;
    this.value = this.value ?? 100;
    const maxed = this.maxValue === this.value;
    this.isMaxed = maxed;
    this.isMaxedChange.emit(maxed);
    this.name = this.name || 'ranged-slider';
    this.labelTextSuffix = this.labelTextSuffix || 'Value';
  }
}
