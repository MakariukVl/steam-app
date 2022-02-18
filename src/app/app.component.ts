import { Component } from '@angular/core';
import { FormField } from '@shared/interfaces/form-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'steam-app';
  form = {
    title: 'My Form',
    buttonText: 'Submit',
    fields: [
      {
        title: 'Name',
        type: 'text',
        placeholder: 'Your Name',
      } as FormField,
      {
        title: 'Email',
        type: 'email',
        placeholder: 'Your Email',
      } as FormField,
    ],
  };
  values: Array<string | null> = [];

  onSubmit(values: Array<string | null>) {
    console.log(values.join(' '));
  }
}
