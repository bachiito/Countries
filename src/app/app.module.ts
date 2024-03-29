import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountriesFilterComponent } from './components/countries-filter/countries-filter.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { DropShadowDirective } from './directives/drop-shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesFilterComponent,
    CountriesListComponent,
    DropShadowDirective,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
