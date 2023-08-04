import { Component } from '@angular/core';

@Component({
  selector: 'app-countries-filter',
  templateUrl: './countries-filter.component.html',
  styleUrls: ['./countries-filter.component.css'],
})
export class CountriesFilterComponent {
  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
}
