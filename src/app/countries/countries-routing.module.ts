import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';

const routes: Routes = [
  {
    path: '', component: CountriesComponent, children: [
      { path: '', component: CountriesListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
