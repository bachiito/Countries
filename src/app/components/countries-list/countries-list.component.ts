import { Component } from '@angular/core';

import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent {
  countries: Country[] = [];
}
