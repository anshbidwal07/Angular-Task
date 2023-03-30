import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HTTP_INTERCEPTORS, HttpRequest, HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Inside the intercepter MP 09")
    console.log("Request is ", req)
    const authReq = req.clone({ headers: req.headers.set('Auth','abc')});
    console.log("Modified request is: ", authReq)
    return next.handle(authReq);
  }
  
  dat  = new Subject <any>();
}
