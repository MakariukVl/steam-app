import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeGamesService } from './services/fake-games.service';
import { AuthService } from './services/auth.service';
import { FakeUsersService } from './services/fake-users.service';
import { EncrDecrService } from './services/encr-decr.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [FakeGamesService, AuthService, FakeUsersService, EncrDecrService],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: CoreModule,
      providers: [FakeGamesService, AuthService, FakeUsersService, EncrDecrService]
    };
  }
}
