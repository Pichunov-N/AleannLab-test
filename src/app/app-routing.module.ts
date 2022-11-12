import { DashboardComponent } from './component/job/dashboard/dashboard.component';
import { JobService } from './component/job/job.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './component/job/job-list/job-list.component';
import { JobDetailComponent } from './component/job/job-detail/job-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'list',
    component: JobListComponent,
  },
  {
    path: 'details',
    component: JobDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
