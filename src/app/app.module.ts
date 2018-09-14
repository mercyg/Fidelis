import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertsService } from './shared/service/alerts.service';
import { FilterPipe } from './filter.pipe'
import { CountryPipe} from './country.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    FilterPipe,
    CountryPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ AlertsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
