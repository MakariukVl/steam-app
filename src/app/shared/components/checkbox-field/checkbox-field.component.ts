import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent implements OnInit {
  /* pseudo - unique random value */
  generatedId = `checkboxID-${Date.now()}.${Math.random()
    .toString()
    .slice(10)}`;
  @Input() name?: string;
  @Input() value?: string;
  @Input() labelText?: string;
  @Input() appChecked?: boolean;
  @Output() appCheckedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.name = this.name || 'checkbox-group';
    this.value = this.value || 'checkbox-value';
    this.labelText = this.labelText || 'Checkbox label';
    this.appChecked = this.appChecked || false;
    this.appCheckedChange.emit(!!this.appChecked);
  }

  onChange(changed: boolean) {
    this.appChecked = changed;
    this.appCheckedChange.emit(changed);
  }
}
