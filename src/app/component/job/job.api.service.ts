import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobApiService {
  url: string =
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  constructor(private http: HttpClient) {}

  get<T>( httpParams?: HttpParams): Observable<T> {
    return this.http.get<T>(this.url, { params: httpParams });
  }

  getById<T>( path: string, httpParams?: HttpParams): Observable<T> {
    return this.http.get<T>(this.url + path,  { params: httpParams });
  }
}
