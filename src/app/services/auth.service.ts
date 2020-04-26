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

  private apiUrl  = "https://api.covid19india.org/state_district_wise.json";
  
  constructor(private http : HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}


login(username, password) {
  let user={username,password};
  return this.http.get<any>(`${this.apiUrl}`)
      .pipe(map(user => {
        //  store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
    
           }));
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