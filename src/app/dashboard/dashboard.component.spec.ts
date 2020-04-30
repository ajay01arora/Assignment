import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CasesDataService } from '../services/cases-data.service';
import { Observable } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let cases = CasesDataService;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DashboardComponent ],
      providers:[{provide: CasesDataService, useClass: CasesDataService}]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      cases = TestBed.get(CasesDataService); 
      //  get the "a" element by CSS selector (e.g., by class name)
      el = fixture.debugElement.query(By.css('stateName'));

    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Button label via fakeAsync() and tick()', async(() => {
    fixture.detectChanges();

  fixture.whenStable().then(() => {
    component.viewStateDetails('AN');
    expect(component.selectState.stateName).toBe(null);
  })
}));

});
