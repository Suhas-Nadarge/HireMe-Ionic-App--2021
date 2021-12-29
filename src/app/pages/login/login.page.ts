import { ToasterService } from './../../services/toaster.service';
import { FormGroup, FormBuilder } from "@angular/forms";

import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  constructor(public router:Router, public loginService: LoginService,public fb: FormBuilder, public toastr:ToasterService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      // username: [''],
      email: [''],
      password:['']
    });
  }

  login(){
    this.loginService.getAllUsers().subscribe(resp=>{
      console.log(JSON.stringify(resp))
     const userobj = resp.filter( user => user.email  === this.loginForm.get('email').value)[0]
     if(userobj && (userobj.password === this.loginForm.get('password').value)){
      userobj['isRecruiter'] == 'true'  ? this.router.navigate(['/recruiter-home']) : this.router.navigate(['/applicant-home'])
      userobj['isRecruiter'] == 'true' ? localStorage.setItem('isRecruiter', 'true') : localStorage.setItem('isRecruiter', 'false')
       this.toastr.presentToast('User logged in successfully','success');
     } else {
      this.toastr.presentToast('Invalid email or password','danger');
     }
    })
  }
}
