import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountriesFilterComponent } from './components/countries-filter/countries-filter.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesFilterComponent,
    CountriesListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
