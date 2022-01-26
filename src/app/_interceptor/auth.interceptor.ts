import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzaGlrIiwiZW1haWwiOiJhc2hpa0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImFzaGlrIiwicm9sZSI6MSwiaWF0IjoxNjQzMTE0OTcwLCJleHAiOjE2NDMyMDEzNzB9.bOXgOXd9QhDJA12ERdQmlvQcccdpJxw_k0-3ys3iSzQ';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('access_token');
        if (authToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + authToken)
            });
            return next.handle(cloned);
        } else {
            this.router.navigate(['/auth/login'])
            return next.handle(req)
            // return this.router.navigate['/auth/login']
        }
    }

    // public getAuthFromLocalStorage(): 

}