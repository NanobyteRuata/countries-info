import { Component, ElementRef, HostListener } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  // States
  isFetchingCountries: boolean = true;
  searchValue: string = '';
  sortBy: string = 'nameAesc';
  showBackToTop: boolean = false;

  private _countries: any[] = [];
  get countries() {
    let tempCountries = [...this._countries];

    // Filter by search
    if (this.searchValue.length > 0) {
      let filteredByCommonName = this._countries.filter((c) =>
        (c.name.common as string).includes(this.searchValue)
      );

      let filteredByCapital = this._countries.filter((c) =>
        c.capital
          ? c.capital.filter((cap: string) => cap.includes(this.searchValue))
              .length > 0
          : false
      );

      // Combine and remove duplicate
      tempCountries = [
        ...new Set([...filteredByCommonName, ...filteredByCapital]),
      ];
    }

    //  Apply sort filter
    switch (this.sortBy) {
      case 'nameAesc':
        tempCountries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        break;
      case 'nameDesc':
        tempCountries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
        break;
      case 'populationAesc':
        tempCountries.sort((a, b) => a.population - b.population);
        break;
      case 'populationDesc':
        tempCountries.sort((a, b) => a.population - b.population).reverse();
        break;
    }

    return tempCountries;
  }

  constructor(
    private countriesService: CountriesService,
    private elementRef: ElementRef
  ) {
    // get countries from API
    this.countriesService.getAllCountries().subscribe({
      next: (res: any[]) => {
        this._countries = res;
        this.isFetchingCountries = false;
      },
    });
  }

  @HostListener('scroll', ['$event'])
  onScroll = (event: any) => {
    this.showBackToTop = event.target.scrollTop > document.body.clientHeight;
  };

  onNameSortClicked() {
    switch (this.sortBy) {
      case 'populationAesc':
        this.sortBy = 'nameAesc';
        break;
      case 'populationDesc':
        this.sortBy = 'nameAesc';
        break;
      case 'nameDesc':
        this.sortBy = 'nameAesc';
        break;
      case 'nameAesc':
        this.sortBy = 'nameDesc';
        break;
    }
  }

  onPopulationSortClicked() {
    switch (this.sortBy) {
      case 'nameAesc':
        this.sortBy = 'populationAesc';
        break;
      case 'nameDesc':
        this.sortBy = 'populationAesc';
        break;
      case 'populationDesc':
        this.sortBy = 'populationAesc';
        break;
      case 'populationAesc':
        this.sortBy = 'populationDesc';
        break;
    }
  }

  onBackToTopClicked() {
    this.elementRef.nativeElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
