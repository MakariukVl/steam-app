import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    FriendsPageComponent,
    GamesPageComponent,
    LibraryPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule.forRoot()
  ]
})
export class PagesModule { }
