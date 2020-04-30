import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionComponent } from './precaution.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrecautionComponent', () => {
  let component: PrecautionComponent;
  let fixture: ComponentFixture<PrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionComponent ],
      imports: [RouterTestingModule],


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
