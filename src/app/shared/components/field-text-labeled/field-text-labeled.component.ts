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

  @Input() value: string | null = '';
  @Output() valueChange = new EventEmitter<string | null>();

  onChange(inputValue: string | null) {
    this.value = inputValue;
    this.valueChange.emit(inputValue);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
