import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { Region } from 'src/app/models/region.model';
import { Regions } from 'src/app/models/region.model';

interface CountryForm {
  name: string;
  region: Region;
}

@Component({
  selector: 'app-countries-filter',
  templateUrl: './countries-filter.component.html',
  styleUrls: ['./countries-filter.component.css'],
})
export class CountriesFilterComponent {
  regions = structuredClone(Regions);

  countryForm = this.formBuilder.group<CountryForm>({
    name: '',
    region: 'All',
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  onRegionChanged(): void {
    const { region } = this.countryForm.value;

    if (region) {
      this.dataService.setCountriesByRegion(region);
    }
  }
}
