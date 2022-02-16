import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() targetId!: string;
  @Input() labelText?: string;

  constructor() {}

  ngOnInit(): void {
    this.labelText = this.labelText || 'Label';
    this.targetId = this.targetId || 'Input';
  }
}
