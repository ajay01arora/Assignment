import { Component, OnInit, Input } from '@angular/core';
import { IState } from '../../interfaces/IState';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {

  constructor() { }

  @Input()  state : IState = null;

  ngOnInit(): void {
  }

}
