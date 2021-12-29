import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.page.html',
  styleUrls: ['./view-job.page.scss'],
})
export class ViewJobPage implements OnInit {
  pageName = 'View Job'
  currentObj : any;
  


  constructor(public route: Router) { 
    
  }

  ngOnInit() {
    this.currentObj = this.route.getCurrentNavigation().extras.state.object

  }
  applyJob(){
  }



}


