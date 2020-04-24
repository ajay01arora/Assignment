import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions =  {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class CasesDataService {
  
  private apiUrl  = "https://api.covid19india.org/state_district_wise.json";
  
  constructor(private http : HttpClient) { }
  
   getStateDetails() : Observable<Object>{
    console.log("inside the service");
   return  this.http.get<any>(this.apiUrl);
   
  }


}

