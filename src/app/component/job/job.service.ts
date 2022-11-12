import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Jobs } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  // path: string = 'details'; 

  constructor(private http: HttpClient) {}

  url: string =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  getAll(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.url)
      
  }

  // getJobById(id: number): Observable<Jobs> {
  //   const url = `${this.path}/${id}`;
  //   return this.http.get<Jobs>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Jobs>(`getHero id=${id}`))
  //   );
  // }

  getById(id: Number): Observable<Jobs> {
    const path = `${this.url}`;
    return this.http.get<Jobs>(path)
  }
}
