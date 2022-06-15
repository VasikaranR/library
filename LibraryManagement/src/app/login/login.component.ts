import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginDataService } from '../login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router,private route: ActivatedRoute,private loginDataService:LoginDataService) { }
  name:string="vasi";
  password1:string='';
  email1:string='';
  roleValue:string='';
  ngOnInit(): void {
    // console.warn(this.loginDataService.getRole(this.roleValue));
     
  }
  
  dashBoard(){
    console.warn(this.loginDataService.getRole(this.roleValue));
    if(this.roleValue==='user')
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/dashboard']);

    }
  }

  
}
