import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-home',
  templateUrl: './applicant-home.page.html',
  styleUrls: ['./applicant-home.page.scss'],
})
export class ApplicantHomePage implements OnInit {
  jobList= [];
  filterTerm: string;
  SearchJob = 'Search Job'
  constructor(public jobService: JobService) { }

  ngOnInit() {
    this.getAllJObs();
  }
  getAllJObs() {
    this.jobService.getAllJobs().subscribe(resp=>{
      console.log(resp)
      this.jobList = resp
    })
  }

}
