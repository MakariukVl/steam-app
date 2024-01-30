import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-setters',
  templateUrl: './range-setters.component.html',
  styleUrls: ['./range-setters.component.scss'],
})
export class RangeSettersComponent implements OnInit {
  isInvalidRange = false;

  @Input() minValue?: number | string;
  @Input() maxValue?: number | string;
  @Output() submitRange = new EventEmitter<{ min: number; max: number }>();

  constructor() {}

  ngOnInit(): void {
    this.minValue = this.minValue ?? 0;
    this.maxValue = this.maxValue ?? 100;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submitRange.emit({
      min: Number(this.minValue) || 0,
      max: Number(this.maxValue) || 100,
    });
  }

  onChange() {
    const MIN = Number(this.minValue) || 0;
    const MAX = Number(this.maxValue) || 100;

    if (MIN >= MAX) {
      this.isInvalidRange = true;
      return;
    }
    if (MIN < 0) {
      this.isInvalidRange = true;
      return;
    }
    this.isInvalidRange = false;
  }
}
