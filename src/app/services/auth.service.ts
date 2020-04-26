import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { environment } from '@environments/environment';
import { ILogin } from '../login/login';  

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{    

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public npointBaseUrl:string="https://www.npoint.io/documents/680bba8d293902089d18";

  private apiUrl  = "https://api.covid19india.org/state_district_wise.json";
  
  constructor(private http : HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}


async login(userData) {
  
  let user=userData,loginSuccess=false;
  const adminUser=await this.http.get<any>(`${this.npointBaseUrl}`).toPromise();

  // console.log("adminUser.contents",adminUser.contents,user)

  adminUser.contents.map((data)=>{
    console.log("adminUser.contents",data)
    if(data.userId==user.userid){
      if(data.password==user.password){
        loginSuccess=true;                // you can use lodash to compare id password, i chose this one easier but not ideal
      }
    }
  })


 if(loginSuccess){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

     return loginSuccess;
    
  // }));


  return 
}

  logout() : void
   {    

      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);

      localStorage.setItem('isLoggedIn','false');    
      localStorage.removeItem('token');    
    }   
    
    

}  