import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColorSchemas } from '@shared/interfaces/button-color-schemas';
import { ButtonType } from '@shared/interfaces/button-types';
import { ButtonSizes } from '@shared/interfaces/button-sizes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size?: ButtonSizes;
  @Input() colorScheme?: ButtonColorSchemas;
  @Input() type?: ButtonType;
  @Input() isDisabled?: boolean;
  @Output() appClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.size = this.size || 'normal';
    this.colorScheme = this.colorScheme || 'primary';
    this.type = this.type || 'button';
    this.isDisabled = this.isDisabled || false;
  }
}
