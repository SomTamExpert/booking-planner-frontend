import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return next.handle(req);
    }
    const req1 = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
    return next.handle(req1);
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
];
