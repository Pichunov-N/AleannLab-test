import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobList$ = this.jobService.getJobs().pipe(map((newsList) => newsList));

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}
}
