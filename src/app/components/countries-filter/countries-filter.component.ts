import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Region } from 'src/app/models/region.model';
import { regions } from 'src/app/models/region.model';
import { fallBackRegion } from 'src/app/models/region.model';

interface CountryForm {
  name?: string;
  region: Region;
}

@Component({
  selector: 'app-countries-filter',
  templateUrl: './countries-filter.component.html',
  styleUrls: ['./countries-filter.component.css'],
})
export class CountriesFilterComponent {
  regions = structuredClone(regions);

  countryForm = this.formBuilder.group<CountryForm>({
    name: undefined,
    region: fallBackRegion,
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  onRegionChanged(): void {
    const region = this.countryForm.value.region ?? fallBackRegion;
    this.dataService.setCountriesByRegion(region);
    this.countryForm.patchValue({ name: undefined });
  }

  onCountrySearched(): void {
    const name = this.countryForm.value?.name;
    this.dataService.searchCountry(name);
  }
}
