import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormModel } from '@shared/interfaces/form-model';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.scss'],
})
export class FormDataDrivenComponent implements OnInit {
  // @Input() fields?: FormField[];
  // @Input() title?: string;
  // @Input() buttonText?: string;

  @Input() formModel?: FormModel;

  @Input() values: Array<string | null> = [];
  @Output() valuesChange = new EventEmitter<Array<string | null>>();
  @Output() submit = new EventEmitter<Array<string | null>>();

  constructor() {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submit.emit(this.values);
    // console.log(typeof event);
    // console.log(event);
    // TODO: Get Form data - DONE
    // TODO: REST API Call
    // SUGGESTIONS: ng-content for Inputs and other content
  }

  onEachChange(val: string | null, index: number) {
    this.values[index] = val;
    this.valuesChange.emit(this.values);
  }

  ngOnInit(): void {
    // this.title = this.title || 'Form Title';
    // this.buttonText = this.buttonText || 'Button text';
    // this.fields = this.fields || [
    //   {
    //     title: 'Label',
    //     type: 'text',
    //     pattern: '.*',
    //     placeholder: 'Input Placeholder',
    //   },
    //   {
    //     title: 'Label',
    //     type: 'text',
    //     pattern: '.*',
    //     placeholder: 'Input Placeholder',
    //   },
    // ];

    this.formModel = this.formModel || {
      title: 'Form Title',
      fields: [
        {
          title: 'Label',
          type: 'text',
          pattern: '.*',
          placeholder: 'Input Placeholder',
        },
        {
          title: 'Label',
          type: 'text',
          pattern: '.*',
          placeholder: 'Input Placeholder',
        },
      ],
      buttonText: 'Button text',
    };
  }
}
