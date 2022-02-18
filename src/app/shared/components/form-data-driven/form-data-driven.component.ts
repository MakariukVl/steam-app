import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.scss'],
})
export class FormDataDrivenComponent implements OnInit {
  @Input() title?: string;
  @Input() buttonText?: string;
  @Input() isSubmitReload?: boolean;
  @Output() appSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.title = this.title || 'Form Title';
    this.buttonText = this.buttonText || 'Button text';
    this.isSubmitReload = this.isSubmitReload || false;
  }

  onSubmit(event: SubmitEvent) {
    if (!this.isSubmitReload) {
      event.preventDefault();
    }
    this.appSubmit.emit();
  }
}
