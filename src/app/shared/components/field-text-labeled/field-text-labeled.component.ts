import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextInputType } from '@shared/interfaces/input-text-type';

@Component({
  selector: 'app-field-text-labeled',
  templateUrl: './field-text-labeled.component.html',
  styleUrls: ['./field-text-labeled.component.scss'],
})
export class FieldTextLabeledComponent implements OnInit {
  /* pseudo - unique random value */
  generatedId = `inputID-${Date.now()}.${Math.random().toString().slice(10)}`;
  @Input() title?: string;
  @Input() pattern?: string;
  @Input() type?: TextInputType;
  @Input() placeholder?: string;
  @Input() required?: boolean;

  @Input() value?: string;
  @Output() valueChange = new EventEmitter<string>();

  onChange(inputValue: string) {
    this.value = inputValue;
    this.valueChange.emit(inputValue);
  }

  constructor() { }

  ngOnInit(): void {
    this.required = this.required ?? false;
    this.value = '';
  }
}
