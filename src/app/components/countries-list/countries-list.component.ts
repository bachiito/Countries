import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Country } from '../../models/country.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService
      .getCountriesSubject()
      .subscribe((data) => {
        this.countries = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
