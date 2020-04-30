import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../services/news-data.service';
import { Router } from '@angular/router';
import { INews } from '../interfaces/INews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsDataService]
})
export class NewsComponent implements OnInit {

  constructor(private newsData : NewsDataService, private router :Router) { }

  NewsList : INews[]=[];


 async ngOnInit() {

  const data=await  this.newsData.getNews();   
   this.NewsList = data;   
  }

  ViewNews(id: number)
  {
    let routeUrl = "view-news/"+id;
    this.router.navigate([routeUrl]);
  }

}
