import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    JobListComponent,
    JobDetailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    JobListComponent,
    JobDetailComponent,
    DashboardComponent,
  ]
})
export class JobModule { }
