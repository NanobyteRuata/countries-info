import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  let service: InterceptorService;
  let notificationService: NzNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NzNotificationModule, BrowserAnimationsModule],
      providers: [NzNotificationService],
    });
    service = TestBed.inject(InterceptorService);
    notificationService = TestBed.inject(NzNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should blame network connection for "Unknown Errors"', (done) => {
    const request = new HttpRequest<any>(
      'GET',
      'https://restcountries.com/badurl'
    );
    const next: any = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.error(
            new HttpErrorResponse({
              status: 0,
            })
          );
        });
      },
    };

    service.intercept(request, next).subscribe({
      error: (error) => {
        expect(error.message).toBe('Please check your network connection');
        done();
      },
    });
  });
});
