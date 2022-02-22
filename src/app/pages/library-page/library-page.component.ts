import { Component, OnInit } from '@angular/core';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  isAuthorized: boolean;
  signedUser: UserCredentialsModel | null;

  constructor(private authService: AuthService) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
  }

  ngOnInit(): void {}
}
