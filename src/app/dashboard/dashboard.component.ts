import { Component, OnInit } from '@angular/core';
import { CasesDataService } from '../services/cases-data.service';
import { District, State } from '../interfaces/IState';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CasesDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private cases_data : CasesDataService) { }

  StateList : State[]=[];
  
  selectState : State;

  viewStateDetails(stateCode : string)
  {
    this.selectState = this.StateList.find(s=> s.stateCode === stateCode)
  }


ngOnInit() {
  this.cases_data.getStateDetails().subscribe((data) =>{ 

     console.log("data===",data);

      for(var state in data)
      {
        let districtList = new Array<District>();
          for (let district in data[state].districtData)
          {        
              districtList.push(
                {
                  districtName :district, 
                  totalCases: data[state].districtData[district].confirmed,
                active: data[state].districtData[district].active,
                recovered: data[state].districtData[district].recovered, 
                deceased : data[state].districtData[district].deceased 
              });
          }          
          this.StateList.push({stateName:state,stateCode: data[state].statecode,districtList: districtList});
      }
      console.log("stateList====",this.StateList)
    });
  }

  

}
