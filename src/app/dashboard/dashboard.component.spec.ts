import { async, ComponentFixture, TestBed, tick,fakeAsync } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CasesDataService } from '../services/cases-data.service';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  // let component: DashboardComponent;
  // let fixture: ComponentFixture<DashboardComponent>;
  // let cases = CasesDataService;
  // let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: CasesDataService, useClass: CasesDataService }]
    })
    
  }));

  it('should create component', () => {

    let fixture = TestBed.createComponent(DashboardComponent);
    let app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });




  it('should get State list data', () => {

    let fixture = TestBed.createComponent(DashboardComponent);
    let app = fixture.debugElement.componentInstance; 
    let data = [
      {
        stateName: "Assam",
        stateCode: "AS"
      },
      {
        stateName: "Jammu",
        stateCode: "JK"
      },
      {
        stateName: "Punjab",
        stateCode: "PB"
      }
    ]
    app.StateList = data

    fixture.detectChanges()
  
    expect(data).toEqual(app.StateList);
  


  });


  it('should match state name after receiving data', () => {

    let fixture = TestBed.createComponent(DashboardComponent);
    let app = fixture.debugElement.componentInstance; 
   
    let data = [
      {
        stateName: "Assam",
        stateCode: "AS"
      },
      ]
    app.StateList = data
    fixture.detectChanges()
    const button = fixture.debugElement.query(By.css("button"));
    let content=button.nativeElement.textContent;
    expect(content).toEqual(app.StateList[0].stateName);
   
  });


  it("should show state data on button click", () => {
    let fixture = TestBed.createComponent(DashboardComponent);
    let app = fixture.debugElement.componentInstance; 
    let data = [
      {
        stateName: "Assam",
        stateCode: "AS"
      },
      ]
    app.StateList = data

   
    fixture.detectChanges();

    fixture.debugElement
    .query(By.css("button"))
    .triggerEventHandler("click", null);
    expect(data[0]).toEqual(app.selectState);
  });




});
