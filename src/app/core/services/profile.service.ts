import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';

@Injectable({
  providedIn: 'root'
  // providedIn: CoreModule
})
export class ProfileService {

  constructor() { }
}
