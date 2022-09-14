import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let url = "http://localhost:3000/api" + request.url

    const headers = new HttpHeaders({
      'Authorization': 'token 123',
      'WEB-API-key': "environment.webApiKey",
      // 'Content-Type': 'application/json'
    });
    const cloneReq = request.clone({ url, headers });
    return next.handle(cloneReq);
  }
}
