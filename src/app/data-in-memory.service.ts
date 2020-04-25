import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from './add-news/news';

@Injectable({
  providedIn: 'root'
})
export class DataInMemoryService implements InMemoryDbService {
  createDb()
  {
    const News : INews[] = [
    {
      newsTitle : 'Hello',
      description: "Data",
      summary : "summary",
      full_news : "full_news"
    },
    {
      newsTitle : 'newsTitle 2',
      description: "Description 2",
      summary : "summary 2",
      full_news : "full_news 2"
    },

  
  ];

    return {News};
  }
  constructor() { }

  genId(News : INews[]) : number{
    return News.length > 0 ? News.length : 1;
  }
 
}
