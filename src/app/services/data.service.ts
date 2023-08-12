import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Country } from '../models/country.model';
import { Region } from '../models/region.model';
import { fallbackRegion } from '../models/region.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private countriesAPIDomain = 'https://restcountries.com/v3.1';
  private countries$ = new BehaviorSubject<Country[]>([]);
  private countries: Country[] = [];

  constructor(private httpClient: HttpClient) {
    this.init();
  }

  private init(): void {
    this.httpClient
      .get<Country[]>(`${this.countriesAPIDomain}/${fallbackRegion}`)
      .subscribe((data: Country[]) => {
        this.safeAndEmitData(data);
      });
  }

  private safeAndEmitData(data: Country[]): void {
    this.countries = data;
    this.countries$.next(data);
  }

  getCountriesSubject(): BehaviorSubject<Country[]> {
    return this.countries$;
  }

  setCountriesByRegion(region: Region): void {
    if (region === fallbackRegion) {
      this.init();
      return;
    }

    this.httpClient
      .get<Country[]>(`${this.countriesAPIDomain}/region/${region}`)
      .subscribe((data: Country[]) => {
        this.safeAndEmitData(data);
      });
  }

  searchCountry(name?: string | null) {
    if (!name) {
      this.countries$.next(this.countries);
      return;
    }

    const matches = this.countries.filter((country: Country) => {
      return country.name.common.toLowerCase().includes(name.toLowerCase());
    });

    this.countries$.next(matches);
  }
}
