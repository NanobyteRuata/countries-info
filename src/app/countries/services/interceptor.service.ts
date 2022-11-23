import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private notificationService: NzNotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        // show error notification on error responses
        error: error => {
          try {
            if (error instanceof HttpErrorResponse) {
              if(error.status == 0) {
                this.notificationService.error(error.name, "Please check your network connection")
              } else {
                this.notificationService.error(error.name, error.message)
              }
            }
            return of(error);
          } catch (e) {
            this.notificationService.error("Error", JSON.stringify(e))
            return of(e);
          }
        }
      }
      )
    )
  }
}
