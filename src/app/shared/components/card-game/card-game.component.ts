import { Component, Input, OnInit } from '@angular/core';
import { CardCurrencyCodes } from '@shared/interfaces/card-currency-codes';

@Component({
  selector: 'app-card',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss'],
})
export class CardGameComponent implements OnInit {
  @Input() title?: string;
  @Input() price?: number;
  @Input() currencyCode?: CardCurrencyCodes;

  constructor() {}

  ngOnInit(): void {
    this.title = this.title || 'Card Title';
  }
}
