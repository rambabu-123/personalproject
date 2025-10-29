import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_ENDPOINTS } from '../../shared/api/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class Auth {
   private readonly baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }
  
  login = (options: any) => {
    const defaults = {
      url: API_ENDPOINTS.login
    };
    this.post(defaults, options);
  };

 signup = (options: any) => {
  const defaults = {
    url: API_ENDPOINTS.register
  };
  this.post(defaults, options);
};

post = (defaults: any, options: any) => {
    const settings = { ...defaults, ...options };
    const requestBody = settings.data?.body || {};
    const headers = settings.data?.headers || {};

    this.http.post(settings.url, requestBody, { headers }).subscribe({
      next: (response) => {
        if (settings.success) settings.success(response);
      },
      error: (error) => {
        if (settings.failure) settings.failure(error);
      },
      complete: () => {
        if (settings.complete) settings.complete(true);
      }
    });
  };
  //  getToken(): string | null {
  //   return localStorage.getItem('authToken');
  // }

  // logout(): void {
  //   localStorage.removeItem('authToken');
  // }
}
 

  

