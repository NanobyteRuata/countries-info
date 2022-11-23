import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, shareReplay } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries = () => {
    return this.http.get('https://restcountries.com/v3.1/all').pipe(
      retry({ count: 10, delay: 2000 }), // retry 10 times if fails, 2sec delay for each retry
      map((response) => {
        // return empty array if response is an unexpected object
        if (!Array.isArray(response)) {
          console.error('response is not array');
          return [];
        }
        return response;
      }),
      shareReplay()
    );
  };
}
