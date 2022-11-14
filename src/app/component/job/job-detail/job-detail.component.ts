import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  page: boolean = false;
  jobs: any;
  id: number | undefined;
  job: any;
  benefits: any = [];
  private subscription: Subscription;

  constructor(private httpClient: HttpClient, private activateRoute: ActivatedRoute, private location: Location){
    this.jobs = [];
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(): void {
    if(this.id === undefined) {return}
    this.getWorkersList();
  }

  getWorkersList(){
    const job_info =  this.httpClient.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu').subscribe((result:any)=>
    {
      this.jobs = result;
    if(this.id !== undefined){
      this.job = JSON.parse(JSON.stringify(this.jobs[this.id]));
      this.benefits.push(this.job.description.split('Responsopilities')[1].split('Compensation & Benefits:')[1].split('.'));
      this.benefits[0].pop();
      this.benefits = Array.from(this.benefits[0]);
      this.page = true;
    }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
