import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from './job';
import { JobApiService } from './job.api.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private jobApiService: JobApiService) {}

  getJobs(): Observable<Jobs[]> {
    return this.jobApiService.get();
  }
}
