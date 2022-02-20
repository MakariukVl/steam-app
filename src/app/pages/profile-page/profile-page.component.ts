import { Component, OnInit } from '@angular/core';
import { ProfileFormModel } from '@core/model/profile-form.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  formInput: ProfileFormModel = {
    username: '',
    email: '',
    age: '',
  };

  constructor() {}

  onSubmit() {}

  ngOnInit(): void {}
}
