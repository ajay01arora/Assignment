import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { INews, News } from '../interfaces/INews';
import {catchError} from 'rxjs/operators'

const httpOptions =  {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json',
     "Origin":" https://www.npoint.io",
      "Access-Control-Allow-Origin":"*"    
    })
};

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  jsonStorageBase:string="https://jsonstorage.net/api/items/22cab926-1f6a-46a5-9603-5dc37b5119ec"

  constructor(private http : HttpClient) { }

  async getNews() {
    console.log("inside the service");
    const data=await  this.http.get<INews[]>(this.jsonStorageBase).toPromise();
    console.log("data=====",{data})
    return data;   
  }

  async getNewsById(newsId : number) : Promise<INews>
  {
    let news : INews;
    const oldNews=await this.getNews();
    news = (oldNews as INews[]).find(a => newsId == a.id);
    return news;
  }

  async addNews(News : INews) 
  {
   const oldNews=await this.getNews();
   console.log("previous_news====",oldNews)     
    let id=1;
     await  oldNews.push(News)
      oldNews.map(
        (news)=>{
          console.log("previous_news====",news)
          if(news)
        news.id=id++
      });
      
      console.log("previous_news====",oldNews)
      
      const data=await this.http.put(this.jsonStorageBase ,oldNews,httpOptions).toPromise().catch(
        this.handleError
      );
      console.log({data})
      return data;
   
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
