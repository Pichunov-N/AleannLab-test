import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Jobs } from './job';
import { JobService } from './job.service';

@Injectable({
  providedIn: 'root'
})
export class JobDetailResolver implements Resolve<any> {
  constructor(private jobService: JobService) {}
  httpParams = new HttpParams();


  resolve(route: ActivatedRouteSnapshot): Observable<Jobs> {
    const params = route.queryParams['id'];
    this.httpParams = this.httpParams.set('id', params);
    return this.jobService.getJobById(this.httpParams);
  }
}
