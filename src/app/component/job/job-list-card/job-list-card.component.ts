import { Component, Input, OnInit } from '@angular/core';
import { Jobs } from '../job';

@Component({
  selector: 'app-job-list-card',
  templateUrl: './job-list-card.component.html',
  styleUrls: ['./job-list-card.component.scss'],
})
export class JobListCardComponent implements OnInit {
  @Input() jobs?: Jobs;

  constructor() {}

  ngOnInit(): void {}
}
