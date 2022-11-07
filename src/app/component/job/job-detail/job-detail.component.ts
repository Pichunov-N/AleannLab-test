import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from '../job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  @Input() jobs?: Jobs;

  constructor(private route: ActivatedRoute) { }

  // mapsURL = `https://maps.google.com/maps?q=${this.jobs?.location}%20${this.jobs?.location}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

  // jobDetail?: Jobs;

  // setJobDetail() {
  //   this.jobDetail = this.route.snapshot.data['JobDetail$'];
  // }

  ngOnInit(): void {

  }

}
