import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesService } from '../../services/countries.service';

import { CountriesListComponent } from './countries-list.component';

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesListComponent ],
      imports: [HttpClientModule],
      providers: [CountriesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
