import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileFormModel } from '@core/models/profile-form.model';

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

  constructor(/*private route: ActivatedRoute*/) {
    // console.log(route.snapshot.url.toString()); //profile
  }

  onSubmit() {}

  ngOnInit(): void {}
}
