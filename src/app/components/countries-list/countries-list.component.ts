import { Component } from '@angular/core';

import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent {
  countries: Country[] = [
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      capital: 'Kabul',
      subRegion: 'Southern Asia',
      region: 'Asia',
      population: 40218234,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [
        {
          code: 'AFN',
          name: 'Afghan afghani',
          symbol: '؋',
        },
      ],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      capital: 'Tirana',
      subRegion: 'Southern Europe',
      region: 'Europe',
      population: 2837743,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      nativeName: 'Shqipëria',
      currencies: [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L',
        },
      ],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://flagcdn.com/al.svg',
    },
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      capital: 'Kabul',
      subRegion: 'Southern Asia',
      region: 'Asia',
      population: 40218234,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [
        {
          code: 'AFN',
          name: 'Afghan afghani',
          symbol: '؋',
        },
      ],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      capital: 'Tirana',
      subRegion: 'Southern Europe',
      region: 'Europe',
      population: 2837743,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      nativeName: 'Shqipëria',
      currencies: [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L',
        },
      ],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://flagcdn.com/al.svg',
    },
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      capital: 'Kabul',
      subRegion: 'Southern Asia',
      region: 'Asia',
      population: 40218234,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [
        {
          code: 'AFN',
          name: 'Afghan afghani',
          symbol: '؋',
        },
      ],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      capital: 'Tirana',
      subRegion: 'Southern Europe',
      region: 'Europe',
      population: 2837743,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      nativeName: 'Shqipëria',
      currencies: [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L',
        },
      ],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://flagcdn.com/al.svg',
    },
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      capital: 'Kabul',
      subRegion: 'Southern Asia',
      region: 'Asia',
      population: 40218234,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [
        {
          code: 'AFN',
          name: 'Afghan afghani',
          symbol: '؋',
        },
      ],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      capital: 'Tirana',
      subRegion: 'Southern Europe',
      region: 'Europe',
      population: 2837743,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      nativeName: 'Shqipëria',
      currencies: [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L',
        },
      ],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://flagcdn.com/al.svg',
    },
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      capital: 'Kabul',
      subRegion: 'Southern Asia',
      region: 'Asia',
      population: 40218234,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [
        {
          code: 'AFN',
          name: 'Afghan afghani',
          symbol: '؋',
        },
      ],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      capital: 'Tirana',
      subRegion: 'Southern Europe',
      region: 'Europe',
      population: 2837743,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      nativeName: 'Shqipëria',
      currencies: [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L',
        },
      ],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://flagcdn.com/al.svg',
    },
  ];
}
