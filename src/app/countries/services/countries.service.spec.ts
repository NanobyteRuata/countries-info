import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountriesService],
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCountries() should get array', (done) => {
    service.getAllCountries().subscribe({
      next: (res) => {
        expect(Array.isArray(res)).toBe(true);
        done();
      },
    });
  });
});
