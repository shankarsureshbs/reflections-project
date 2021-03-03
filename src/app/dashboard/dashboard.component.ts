import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  createJob = 'getHome';
  jobs = [];

  createJobClicked(value: string) {
    this.createJob = value;
  }
  onHomeClick(value: string) {
    this.createJob = value;
  }
  createdJobs(jobArr) {
    this.jobs.push(jobArr);
  }
  showJobList(value: string) {
    this.createJob = value;
  }
}
