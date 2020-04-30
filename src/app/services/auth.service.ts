import {
  Injectable
 } from '@angular/core';
 import {
  HttpClient
 } from '@angular/common/http';
 import {
  BehaviorSubject,
  Observable
 } from 'rxjs';
 
 @Injectable({
  providedIn: 'root'
 })
 export class AuthService {
 
  private currentUserSubject: BehaviorSubject < any > ;
  public currentUser: Observable < any > ;
  public npointBaseUrl: string = "https://www.npoint.io/documents/680bba8d293902089d18";
 
  constructor(private http: HttpClient) {
   this.currentUserSubject = new BehaviorSubject < any > (JSON.parse(sessionStorage.getItem('currentUser')));
   this.currentUser = this.currentUserSubject.asObservable();
  }
 
 
  public get currentUserValue(): any {
   return this.currentUserSubject.value;
  }
 
 
  async login(userData) {
 
   let user = userData,
    loginSuccess = false;
   const adminUser = await this.http.get < any > (`${this.npointBaseUrl}`).toPromise();
 
   adminUser.contents.map((data) => {
    console.log("adminUser.contents", data);
 
    if (data.userId == user.userid) {
     if (data.password == user.password) {
      loginSuccess = true; // you can use lodash to compare id password, i chose this one easier but not ideal
     }
    }
   })
   if (loginSuccess) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    sessionStorage.setItem('isLoggedIn', "true");
    this.currentUserSubject.next(user);
   }
 
   return loginSuccess;
  }
 
  logout(): void {
   // remove user from local storage to log user out
   sessionStorage.removeItem('currentUser');
   this.currentUserSubject.next(null);
 
   sessionStorage.setItem('isLoggedIn', 'false');
   sessionStorage.removeItem('token');
  }
 
 }