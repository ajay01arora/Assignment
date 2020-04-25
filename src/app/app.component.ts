import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  loggedIn : boolean;
  loggedOut : boolean;

  ngOnInit(): void {
    this.isLoggedIn();
  }
  
public isLoggedIn()
{      
  if (localStorage.getItem('isLoggedIn') == "true") {      
     this.loggedIn = true;   
     this.loggedOut = false;      
  }    
  else {      
     this.loggedIn = false; 
     this.loggedOut = true;      
     }       
  }    
}  

