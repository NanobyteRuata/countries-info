import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { CountriesService } from './services/countries.service';
import { FormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { UnderlineMatchPipe } from './pipes/underline-match.pipe';

@NgModule({
  declarations: [
    CountriesListComponent,
    CountryCardComponent,
    TitleBarComponent,
    UnderlineMatchPipe,
  ],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule, 
    NzCardModule, 
    NzInputModule, 
    NzButtonModule, 
    NzTableModule, 
    NzDividerModule
  ],
  providers: [CountriesService, {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }],
})
export class CountriesModule { }
