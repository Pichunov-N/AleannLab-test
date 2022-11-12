import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from '../job';
import { Location } from '@angular/common';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  jobs: Jobs | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getById(id)
      .subscribe(jobs => this.jobs = jobs);
  }

  goBack(): void {
    this.location.back();
  }
}
