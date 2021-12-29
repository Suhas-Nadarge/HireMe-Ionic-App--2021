import { ToasterService } from 'src/app/services/toaster.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  // navigate: any;  
  showSplash = true;
  constructor(public route: Router,
    public toaster: ToasterService) {

    }
  ngOnInit(): void {
    // this.splashScreen.show();
    setTimeout(() => {
      this.showSplash = false
      // this.splashScreen.hide();

    }, 2500);
  }

  navigate =   [  
    { 
      title : 'Posted Jobs',
      url   : 'posted-jobs',
      icon  : 'briefcase',
      isForward: 'yes',
      isShow: localStorage.getItem('isRecruiter') === 'true'  ? true : false
      },
      { 
        title : 'Saved Jobs',
        url   : 'saved-jobs',
        icon  : 'briefcase',
        isForward: 'yes',
        isShow: localStorage.getItem('isRecruiter') === 'true'  ? false : true
        },
      { 
        title : 'Applied Jobs',
        url   : 'applied-jobs',
        icon  : 'briefcase',
        isForward: 'yes',
        isShow: localStorage.getItem('isRecruiter') === 'true' ? false : true
        },
        { 
          title : 'Logout',
          url   : 'logout',
          icon  : 'log-out',
          isForward: 'no',
          isShow: true
          }

    ]; 

  navigateTo(key: string): void{
  switch (key) {
    case 'logout':
      localStorage.clear();
      this.route.navigate([''])
      this.toaster.presentToast('Logged out successfully','success')
      break;
    case 'posted-jobs':
        this.route.navigate(['posted-jobs'])
        break;  
    case 'saved-jobs':
          this.route.navigate(['saved-jobs'])
          break;
  default:
    break;
}
  }
}
