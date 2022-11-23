import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private notificationService: NzNotificationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // Handle error responses
      catchError((error) => {
        console.log(error);
        try {
          if (error instanceof HttpErrorResponse) {
            // Blame network connection if status is not 2xx - 5xx
            if (error.status == 0) {
              const message = 'Please check your network connection';

              this.notificationService?.error(error.name, message);

              // Also update the error message
              return throwError(() => {
                return { ...error, message } as HttpErrorResponse;
              });
            } else {
              this.notificationService.error(error.name, error.message);
            }
          }
          return throwError(() => error);
        } catch (e) {
          // Handle other unknown error
          console.error(e);
          return throwError(() => e);
        }
      })
    );
  }
}
