import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterInterface } from '../models/register.interface';


const APP_API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(data: RegisterInterface): Observable<any> {
    return this.http.post<any>(`${APP_API_URL}/auth/signup`, data);
  }
  login(data: RegisterInterface): Observable<any> {
    return this.http.post<any>(`${APP_API_URL}/auth/login`, data)
  }
}
