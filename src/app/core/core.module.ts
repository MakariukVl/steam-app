import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './services/profile.service';
import { FakeGamesService } from './services/fake-games.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: CoreModule,
      providers: [ProfileService, FakeGamesService, AuthService]
    };
  }
}
