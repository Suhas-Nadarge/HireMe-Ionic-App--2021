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
           _location:['Dublin, County Dublin'],
          company:['IBM'],
          description:['A keen interested with demonstrated technical skills and experience in UI front-end development.'],
          job_type:['Full-Time'],
          level:['Mid'],
          salary:[55000],
          title:['Front End Developer'],
          technologies:['HTML,CSS, Angular, Bootstrap,GIT'],
          responsibilities:['Reporting to the Development Manager and working with a local and global team, you will design, code, and test new UI product features. You will also gain experience in build automation, code deployment and work on defect resolution.']
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
