import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Jobs } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor(private http: HttpClient) {}

  url: string =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy';

  token: string = 'data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

  getAll(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.url}/${this.token}`)
  }

  getById(): Observable<Jobs> {
    const path = `${this.url}/${this.token}`;
    return this.http.get<Jobs>(path)
  }
}
