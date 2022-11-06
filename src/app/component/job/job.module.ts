import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListCardComponent } from './job-list-card/job-list-card.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';



@NgModule({
  declarations: [
    JobListComponent,
    JobListCardComponent,
    JobDetailComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    JobListComponent,
    JobListCardComponent,
    JobDetailComponent,
  ]
})
export class JobModule { }
