import { Component, Input, OnInit } from '@angular/core';
import { TextInputType } from '@shared/models/input-text-type';

@Component({
  selector: 'app-field-text-labeled',
  templateUrl: './field-text-labeled.component.html',
  styleUrls: ['./field-text-labeled.component.scss'],
})
export class FieldTextLabeledComponent implements OnInit {
  /* pseudo - unique random value */
  generatedId = `inputID-${Date.now()}.${Math.random().toString().slice(10)}`;
  @Input() title?: string;
  @Input() type?: TextInputType = 'text';
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
