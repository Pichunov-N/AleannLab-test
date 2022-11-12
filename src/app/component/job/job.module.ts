import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListCardComponent } from './job-list-card/job-list-card.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    JobListComponent,
    JobListCardComponent,
    JobDetailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    JobListComponent,
    JobListCardComponent,
    JobDetailComponent,
    DashboardComponent,
  ]
})
export class JobModule { }
