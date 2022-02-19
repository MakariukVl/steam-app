import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-setters',
  templateUrl: './range-setters.component.html',
  styleUrls: ['./range-setters.component.scss'],
})
export class RangeSettersComponent implements OnInit {
  isInvalidRange = false;

  @Input() minValue?: number;
  @Input() maxValue?: number;
  @Output() submitRange = new EventEmitter<{ min: number; max: number }>();

  constructor() {}

  ngOnInit(): void {
    this.minValue = this.minValue ?? 0;
    this.maxValue = this.maxValue ?? 100;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submitRange.emit({
      min: this.minValue ?? 0,
      max: this.maxValue ?? 100
    })
  }

  onChange() {
    const MIN = this.minValue ?? 0;
    const MAX = this.maxValue ?? 100;

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
