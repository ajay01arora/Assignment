import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { News, INews } from './news';
import { NewsDataService } from '../news-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(
          public fb : FormBuilder,
          private newsdata : NewsDataService, 
          private router : Router
     ) { }

  newsForm : FormGroup;

  news : News;
  submitted:Boolean=false;

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      newsTitle : ["", [Validators.required, Validators.minLength(10)]],
      description : ["", [Validators.required, Validators.minLength(10)]],
      summary : ["", [Validators.required, Validators.minLength(10)]],
      full_news : ["", [Validators.required, Validators.minLength(10)]]
    });

  }

  get f() {
    return this.newsForm.controls;
  }


  save() 
  {
    this.submitted=true;
    // console.log("news=====",News)
    if (this.newsForm.invalid) {
      return;
  }

    if (this.newsForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.newsForm.value);
    }
    //this.newsdata.addNews(News).subscribe();
    // this.router.navigate(['/news']);
  }

}
