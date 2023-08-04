import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountriesFilterComponent } from './components/countries-filter/countries-filter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CountriesFilterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
