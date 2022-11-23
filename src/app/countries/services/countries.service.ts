import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries = () => {
    return this.http.get('https://restcountries.com/v3.1/all').pipe(
      map((response) => {
        // return empty array if response is an unexpected object
        if (!Array.isArray(response)) {
          console.error('response is not array');
          return [];
        }
        return response;
      })
    );
  };
}
