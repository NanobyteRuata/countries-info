import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: any[] = []

  constructor(private countriesService: CountriesService) {
    this.countriesService.getAllCountries().subscribe(res => {
      if(Array.isArray(res)) {
        console.log(res);
        this.countries = res
      }
    }, err => console.error(err))
  }

  ngOnInit(): void {
  }

}
