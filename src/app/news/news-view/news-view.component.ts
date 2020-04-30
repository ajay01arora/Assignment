import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsDataService } from '../../services/news-data.service';
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private route:Router, private newsdata : NewsDataService) { }
    
  News : INews;

  ngOnInit(): void {
    const newsId = this.activatedRoute.snapshot.params.id;
    if(newsId)
    {
      this.newsdata.getNewsById(newsId).then(
        data => 
        {
          this.News = data;
        }
      );
    }
  }

}
