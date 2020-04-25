import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { INews } from './add-news/news';
import {catchError} from 'rxjs/operators'

const httpOptions =  {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  apiUrl : string = "api/News";
  constructor(private http : HttpClient) { }

  getNews() : Observable<INews[]>{
    console.log("inside the service");
   return  this.http.get<INews[]>(this.apiUrl);
   
  }

  addNews(News : INews) : Observable<INews>
  {
    return this.http.post<INews>(this.apiUrl, News, httpOptions).pipe(
      catchError(this.handleError)
    );

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
