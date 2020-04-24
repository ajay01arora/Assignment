import { Component, OnInit } from '@angular/core';
import { CasesDataService } from '../cases-data.service';
import { IState, District, State } from './state';
import { empty } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CasesDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private cases_data : CasesDataService) { }

  StateList : Array<State>;

  districtList : Array<District>;

ngOnInit() {
  this.cases_data.getStateDetails().subscribe((data) =>{ 
    
    
    this.StateList = new Array<State>();
      for(var state in data)
      {
        this.districtList = new Array<District>();
          for (var district in data[state].districtData)
          {

            let obj = new District(district, 
              data[state].districtData[district].confirmed,
              data[state].districtData[district].active, 
              data[state].districtData[district].recovered
              ,data[state].districtData[district].deceased);
           
              this.districtList.push(obj);
          }
          //  console.log("check",state);
          //  console.log(data[state].statecode);
          // console.log(this.districtList);
         // let data1=new State(state, data[state].statecode, this.districtList)
          // console.log("data===",data1)
          this.StateList.push({stateName:state,stateCode: data[state].statecode,districtList: this.districtList});
            //{stateName:state,stateCode: data[state].statecode,districtList: this.districtList});
      }

      console.log("stateList====",this.StateList)
    });
  }

  

}
