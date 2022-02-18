import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColorSchemas } from '@shared/interfaces/button-color-schemas';
import { ButtonType } from '@shared/interfaces/button-types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() colorScheme?: ButtonColorSchemas;
  @Input() type?: ButtonType;
  @Output() appClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.colorScheme = this.colorScheme || 'primary';
    this.type = this.type || 'button';
  }
}
