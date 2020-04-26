import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';  
import { ILogin } from './login';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService  
 ) { 



  if (this.authService.currentUserValue) { 
    this.router.navigate(['/']);
}
 } 

 model: ILogin = { userid: "admin", password: "admin@123" }  

 loginForm: FormGroup;  
message: string;  
loading:boolean=false;
returnUrl: string;
error:any;

ngOnInit() 
{  
    this.loginForm = this.formBuilder.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
    });  


  // this.returnUrl = '/dashboard';  
  // this.authService.logout();  

//   if (this.authenticationService.currentUserValue) { 
//     this.router.navigate(['/']);
// }
}  

get f() { return this.loginForm.controls; }  

async login() {  
  
  // stop here if form is invalid  
  if (this.loginForm.invalid) {  
     return;  
  }  
 

  this.loading = true;
 const loginData=await this.authService.login(this.loginForm.value);
     

if(loginData){
            console.log("data====",loginData)
               this.router.navigate(['/dashboard']);
} else {  
      this.message = "Please check your userid and password";  
      }  
          


  }  

}
