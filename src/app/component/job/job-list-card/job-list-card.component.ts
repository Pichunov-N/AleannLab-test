import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from '../job';

@Component({
  selector: 'app-job-list-card',
  templateUrl: './job-list-card.component.html',
  styleUrls: ['./job-list-card.component.scss'],
})
export class JobListCardComponent implements OnInit {
  @Input() jobs?: Jobs;

  constructor(
    private router: Router
  ) {}

  goToProductDetails(id: string) {
    this.router.navigate(['/details', id]);
  }

  ngOnInit(): void {}
}
