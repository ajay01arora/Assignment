import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { INews } from './add-news/news';
import {catchError} from 'rxjs/operators'

const httpOptions =  {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json',
     "Origin":" https://www.npoint.io",
      "Access-Control-Allow-Origin":"*"
      // "secretKey":"$2b$10$xkMTelHWMW6vhHJWyHJhresCsNKaPyb1rrkXk0ALg.u605JLu9YwO"
    
    })
};



@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  // apiUrl : string = "api/News";
  // baseApiGet:string="https://api.jsonbin.io/b/5ea55a0d1299b93742365823/4";
  // baseApiPut:string="https://api.jsonbin.io/b/5ea55a0d1299b93742365823";
  // baseApiPost:string="https://www.jsonstore.io/aafe2eb88aadf6310cfdb973cc7a4d3bb4378f149874701c073d76144c0b4681";
  // secretKey:string="$2b$10$xkMTelHWMW6vhHJWyHJhresCsNKaPyb1rrkXk0ALg.u605JLu9YwO";
  jsonStorageBase:string="https://jsonstorage.net/api/items/22cab926-1f6a-46a5-9603-5dc37b5119ec"

  // npointBaseUrl:string="https://www.npoint.io/documents/680bba8d293902089d18";
  constructor(private http : HttpClient) { }

  async getNews() {
    console.log("inside the service");
    const data=await  this.http.get<any>(this.jsonStorageBase).toPromise();
    console.log("data=====",{data})
    return data;
   
  }

  async addNews(News : INews) 
  {


   const oldNews=await this.getNews();
   
   //.subscribe((data)=>{
    
       console.log("previous_news====",oldNews)
     
     
       // return this.http.put<any>(this.apiUrl, News, httpOptions).pipe(
      //   catchError(this.handleError)
      // );
      oldNews.push(News)
  
      
      const data=await this.http.put(this.jsonStorageBase ,oldNews,httpOptions).toPromise()
      console.log({data})
      return data;

   // })
    // return  this.http.get<INews[]>(this.baseApiGet);
   
  }
  private handleError(error : HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured:', error.error.message);
    }else
    {
      console.error(error.status);
    }

    return throwError('Something');

  }
}
