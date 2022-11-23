import { TestBed } from '@angular/core/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NzNotificationModule]
    });
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
