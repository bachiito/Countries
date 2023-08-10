import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Country } from '../models/country.model';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private countriesAPIDomain = 'https://restcountries.com/v3.1';
  private countries$ = new BehaviorSubject<Country[]>([]);

  constructor(private httpClient: HttpClient) {
    this.init();
  }

  private init(): void {
    this.httpClient
      .get<Country[]>(`${this.countriesAPIDomain}/all`)
      .subscribe((data: Country[]) => {
        this.countries$.next(data);
      });
  }

  getCountriesSubject(): BehaviorSubject<Country[]> {
    return this.countries$;
  }

  setCountriesByRegion(region: Region): void {
    if (region === 'All') {
      this.init();
      return;
    }

    this.httpClient
      .get<Country[]>(`${this.countriesAPIDomain}/region/${region}`)
      .subscribe((data: Country[]) => {
        this.countries$.next(data);
      });
  }
}
