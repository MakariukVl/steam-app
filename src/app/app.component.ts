import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'steam-app';

  name: string | null = '';
  email: string | null = '';
  age: string | null = '';

  isSubmit = false;

  onSubmit() {
    this.isSubmit = true;

    console.group('User');
    console.log(this.name);
    console.log(this.email);
    console.log(this.age);
    console.groupEnd();
  }
}
