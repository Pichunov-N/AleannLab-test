import { JobService } from './component/job/job.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './component/job/job-list/job-list.component';
import { JobDetailComponent } from './component/job/job-detail/job-detail.component';
import { JobDetailResolver } from './component/job/job-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: JobListComponent,
    // resolve: {
    //   employees: JobService
    // }  
  },
  {
    path: 'details',
    component: JobDetailComponent,
    // resolve: { JobDetail$: JobDetailResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
