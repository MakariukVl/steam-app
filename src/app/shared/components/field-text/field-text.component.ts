import { Component, Input, OnInit } from '@angular/core';
import { TextInputType } from '@shared/interfaces/input-text-type';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss'],
})
export class FieldTextComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() pattern?: string;
  @Input() type?: TextInputType;
  @Input() id!: string;

  constructor() {}

  ngOnInit(): void {
    this.type = this.type || 'text';
    this.placeholder = this.placeholder || 'Input Placeholder';
    this.id = this.id || 'Input';
    this.pattern = this.pattern || '.*';
  }
}
