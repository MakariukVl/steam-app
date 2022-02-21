import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './services/profile.service';
import { FakeGamesService } from './services/fake-games.service';
import { AuthService } from './services/auth.service';
import { FakeUsersService } from './services/fake-users.service';
import { EncrDecrService } from './services/encr-decr.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProfileService, FakeGamesService, AuthService, FakeUsersService, EncrDecrService],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: CoreModule,
      providers: [ProfileService, FakeGamesService, AuthService, FakeUsersService, EncrDecrService]
    };
  }
}
