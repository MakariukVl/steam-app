import { Component, Input, OnInit } from '@angular/core';
import { CurrencyCodes } from '@core/model/currency-code.model';

@Component({
  selector: 'app-card',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss'],
})
export class CardGameComponent implements OnInit {
  @Input() title?: string;
  @Input() price?: number;
  @Input() currencyCode?: CurrencyCodes;

  constructor() {}

  ngOnInit(): void {
    this.title = this.title || 'Card Title';
  }
}
