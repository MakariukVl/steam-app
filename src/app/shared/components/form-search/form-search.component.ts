import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  @Input() title?: string;

  searchValue: string = '';

  @Output() formSubmit = new EventEmitter<string>();

  constructor() {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.formSubmit.emit(this.searchValue || undefined);
  }

  ngOnInit(): void {
    this.title = this.title || 'Search Form';
  }
}
