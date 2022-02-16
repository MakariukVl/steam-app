import { Component, Input, OnInit } from '@angular/core';
import { ButtonColorSchemas } from '@shared/interfaces/button-color-schemas';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() colorScheme?: ButtonColorSchemas;

  constructor() {}

  ngOnInit(): void {
    this.colorScheme = this.colorScheme || 'primary';
  }
}
