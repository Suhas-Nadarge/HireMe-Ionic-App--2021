import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.page.html',
  styleUrls: ['./recruiter-home.page.scss'],
})
export class RecruiterHomePage implements OnInit {

  postJobForm: FormGroup
  constructor(public router:Router, public jobService: JobService,public fb: FormBuilder, public toastr:ToasterService) { }

  ngOnInit() {
    this.postJobForm = this.fb.group({
           _location:[],
          company:[],
          description:[],
          job_type:[],
          level:[],
          salary:[],
          title:[],
          technologies:[],
          responsibilities:[]
    });
  }

  postJob(){
    this.jobService.postJob(this.postJobForm.value).then(() => {
      this.postJobForm.reset();
    }).catch((err) => {
      console.log(err)
    });
  }


}
