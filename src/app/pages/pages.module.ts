import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    FriendsPageComponent,
    GamesPageComponent,
    LibraryPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
