import { environment } from '../../environments/environment';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError, timer } from "rxjs";
import {
  catchError,
  timeout,
  map,
  delay,
} from "rxjs/operators";
import { Injectable } from "@angular/core";

const defaultTimeout = environment.defaultTimeout;

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timeoutValue = Number(request.headers.get('timeout')) || defaultTimeout;
    return next.handle(request).pipe(
      // retry(1),
      // delay(),
      timeout(timeoutValue),
      map((response: HttpResponse<any>) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return this.catchError(error);
      })
    );
  }

  catchError(error) {
    return throwError(error);
  }
}
