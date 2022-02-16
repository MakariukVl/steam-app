import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsPageComponent } from '@pages/friends-page/friends-page.component';
import { GamesPageComponent } from '@pages/games-page/games-page.component';
import { LibraryPageComponent } from '@pages/library-page/library-page.component';
import { LoginPageComponent } from '@pages/login-page/login-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'friends', component: FriendsPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
