import { ToasterService } from 'src/app/services/toaster.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // navigate: any;  
  constructor(public route: Router,
    public toaster: ToasterService) {}

  navigate =   [  
    { 
      title : 'Posted Jobs',
      // url   : 'logout',
      icon  : 'log-out',
      isForward: 'no',
      isShow: localStorage.getItem('isRecruiter') === 'true'  ? true : false
      },
      { 
        title : 'Applied Jobs',
        // url   : 'logout',
        icon  : 'log-out',
        isForward: 'no',
        isShow: localStorage.getItem('isRecruiter') === 'true' ? false : true
        },
        { 
          title : 'Logout',
          // url   : 'logout',
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

  default:
    break;
}
  }
}
