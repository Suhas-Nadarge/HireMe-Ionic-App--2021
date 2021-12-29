import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.page.html',
  styleUrls: ['./applied-jobs.page.scss'],
})
export class AppliedJobsPage implements OnInit {
  isLoad = true;
  pageName = 'Applied Jobs'
  jobList = []
  constructor(public toastr: ToasterService,public vibration: Vibration,public route: Router,public jobService: JobService) { }

  ngOnInit() {
    this.getAppliedJObs();
  }


  getAppliedJObs() {
    this.isLoad =  true;
    this.jobService.getAppliedJobs().subscribe(resp=>{
      console.log(resp)
      this.isLoad = false;
      this.jobList = resp;
      this.jobList = this.jobList.filter(ele=> ele['email'] === localStorage.getItem('email'));
    }),((err) => {
      this.toastr.presentToast('Something went wrong!','danger')
      this.vibration.vibrate(1000);
      console.log(err)
      this.isLoad =  false;

    });
  }

}
