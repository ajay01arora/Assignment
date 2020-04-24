import { Component, OnInit } from '@angular/core';
import { CasesDataService } from '../cases-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CasesDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private cases_data : CasesDataService) { }

  casesdata : any;

async ngOnInit() {
  this.cases_data.getStateDetails().subscribe((data) =>{
    this.casesdata = JSON.stringify(data);
    console.log("api data======",data);
    }
    );

  
  }

  

}
