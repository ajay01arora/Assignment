import { Component, OnInit } from '@angular/core';
import { CasesDataService } from '../cases-data.service';
import { District, State } from './state';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CasesDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private cases_data : CasesDataService) { }

  StateList : Array<State>;
  
  selectState : State;

  viewStateDetails(stateCode : string)
  {
    this.selectState = this.StateList.find(s=> s.stateCode === stateCode)
  }


ngOnInit() {
  this.cases_data.getStateDetails().subscribe((data) =>{ 
        
    let districtList = new Array<District>();
      for(var state in data)
      {
        districtList = new Array<District>();
          for (var district in data[state].districtData)
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
          //  console.log("check",state);
          //  console.log(data[state].statecode);
          // console.log(this.districtList);
         // let data1=new State(state, data[state].statecode, this.districtList)
          // console.log("data===",data1)
          this.StateList.push({stateName:state,stateCode: data[state].statecode,districtList: districtList});
            //{stateName:state,stateCode: data[state].statecode,districtList: this.districtList});
      }

      console.log("stateList====",this.StateList)
    });
  }

  

}
