import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-labeled-field',
  templateUrl: './range-labeled-field.component.html',
  styleUrls: ['./range-labeled-field.component.scss'],
})
export class RangeLabeledFieldComponent implements OnInit {
  minValue?: number;
  maxValue?: number;
  labelText?: string;
  /* pseudo - unique random value */
  generatedId = `sliderID-${Date.now()}.${Math.random().toString().slice(10)}`;

  @Input() name?: string;
  @Input() labelTextSuffix?: string;
  @Input() value?: number;
  @Output() valueChange = new EventEmitter<number>();

  onSubmitRange(range: { min: number; max: number }) {
    this.minValue = range.min;
    this.maxValue = range.max;
  }

  onSliderInput(sliderValue: number) {
    this.value = sliderValue;
    this.valueChange.emit(this.value);
    this.labelText = this.labelTextSuffix + ': ' + this.value;
    console.log('[Range Field] Output:', this.value);

    if (this.maxValue && this.maxValue === sliderValue) {
      this.labelText = 'Any ' + this.labelTextSuffix;
      console.log('[Range Field] Output:', this.labelText);
      return;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.minValue = this.minValue ?? 0;
    this.maxValue = this.maxValue ?? 100;
    this.value = this.value ?? 100;
    this.name = this.name || 'ranged-slider';
    this.labelTextSuffix = this.labelTextSuffix || 'Value';
  }
}
