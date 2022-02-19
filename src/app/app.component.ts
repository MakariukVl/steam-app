import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'steam-app';

  filterPrice = 0;
  formInput: { name: string | null; email: string | null; age: string | null } =
    {
      name: '',
      email: '',
      age: '',
    };
  user: { name: string | null; email: string | null; age: string | null } = {
    name: '',
    email: '',
    age: '',
  };

  // name: string | null = '';
  // email: string | null = '';
  // age: string | null = '';

  isSubmit = false;

  onSubmit() {
    this.isSubmit = true;
    this.user = { ...this.formInput };

    console.group('User');
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.age);
    console.groupEnd();
  }
}
