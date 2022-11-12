import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Jobs } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {

  constructor(private jobService: JobService) {}

  jobList$ = this.jobService.getAll().pipe(map((newsList) => newsList));

  // jobs: Jobs[] = [];

  ngOnInit(): void {
    // this.getJobList()
  }

  // getJobList(): void {
  //   this.jobService.getJobs()
  //   .subscribe(jobs => this.jobs = jobs);
  // }
}
