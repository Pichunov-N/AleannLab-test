import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from './job';
import { JobApiService } from './job.api.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  path: string = '/details';

  constructor(private jobApiService: JobApiService) {}

  getJobs(): Observable<Jobs[]> {
    return this.jobApiService.get();
  }

  getJobById(httpParams: HttpParams): Observable<Jobs> {
    return this.jobApiService.getById<Jobs>(this.path, httpParams);
  }
}
