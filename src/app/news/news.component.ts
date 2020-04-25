import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { INews } from '../add-news/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsDataService]
})
export class NewsComponent implements OnInit {

  constructor(private newsData : NewsDataService) { }

  News : INews[];


  ngOnInit(): void {
    this.newsData.getNews().subscribe( data =>     
    {
      this.News = data;
    });
  }

}
