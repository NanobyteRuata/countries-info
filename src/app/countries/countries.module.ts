import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountriesComponent } from './countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { CountriesService } from './countries.service';



@NgModule({
  declarations: [CountriesListComponent, CountriesComponent, CountryCardComponent, TitleBarComponent],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [CountriesService]
})
export class CountriesModule { }
