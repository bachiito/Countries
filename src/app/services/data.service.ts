import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private APIDomain = 'https://restcountries.com/v3.1';
  private countries$: AsyncSubject<Country[]> = new AsyncSubject<Country[]>();

  constructor(private httpClient: HttpClient) {
    this.init();
  }

  init() {
    this.httpClient
      .get<Country[]>(`${this.APIDomain}/all`)
      .subscribe((data: Country[]) => {
        this.countries$.next(data);
        this.countries$.complete();
      });
  }

  getCountriesSubject(): AsyncSubject<Country[]> {
    return this.countries$;
  }
}
