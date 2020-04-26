import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { INews } from '../add-news/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsDataService]
})
export class NewsComponent implements OnInit {

  constructor(private newsData : NewsDataService, private router :Router) { }

  News : any=[];


 async ngOnInit() {
  const data=await  this.newsData.getNews();   
    
      console.log("news=======",data)
      this.News = data;
   
  }

  ViewNews(id: number)
  {
    let routeUrl = "view-news/"+id;
    this.router.navigate([routeUrl]);
  }

}
