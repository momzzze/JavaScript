import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let token=this.authService.getToken();
    let jsonRequest=request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    }); 

    return next.handle(jsonRequest);
  }
}
