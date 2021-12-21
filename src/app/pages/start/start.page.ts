import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
  redirectLogin(){
    this.route.navigateByUrl('/login')
  }

}
