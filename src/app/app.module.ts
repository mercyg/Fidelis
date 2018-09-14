import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertsService } from './shared/service/alerts.service';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ AlertsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
