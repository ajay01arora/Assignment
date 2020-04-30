import { Component } from '@angular/core';
import  { AuthService } from './services/auth.service'
import { Router } from '@angular/router';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  loggedIn : boolean;
  loggedOut : boolean;
  show:boolean=false;
  currentUser:any;
  constructor(private authService: AuthService, private router: Router){
    this.authService.currentUser.subscribe(x => 
      {
        console.log("x======",x)
        this.currentUser = x
      }
        );
  }

  ngOnInit(): void {
    this.isLoggedIn();
  }
  
public isLoggedIn()
{      
  if (sessionStorage.getItem('isLoggedIn') == "true") {      
     this.loggedIn = true;   
     this.loggedOut = false;      
  }    
  else {      
     this.loggedIn = false; 
     this.loggedOut = true;      
     }       
  }    

  logout(){
    this.authService.logout()
    this.router.navigate(['/dashboard'])
  }
}  

