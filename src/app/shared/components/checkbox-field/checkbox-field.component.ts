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
  @Input() checked?: boolean;
  @Output() checkedChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.name = this.name || 'checkbox-group';
    this.value = this.value || 'checkbox-value';
    this.labelText = this.labelText || 'Checkbox label';
    this.checked = this.checked || false;
  }

  onChange(changed: boolean) {
    this.checked = changed;
    this.checkedChanged.emit(changed);
  }
}
