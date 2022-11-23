import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountriesService]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should get array', async () => {

    spyOn(service, 'getAllCountries').and.returnValue(of())

    service.getAllCountries().subscribe({
      next: res => expect(Array.isArray(res)).toBe(true)
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
