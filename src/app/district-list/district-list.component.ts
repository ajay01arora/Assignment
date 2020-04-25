import { Component, OnInit, Input } from '@angular/core';
import { State } from '../dashboard/state';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {

  constructor() { }

  @Input()  state : State;

  ngOnInit(): void {
  }

}
