import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@core/app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from '@pages/pages.module';
import { SharedModule } from '@shared/shared.module'; //temp debug

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule //temp debug (later moved to pages)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
