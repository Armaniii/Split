import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillActivityComponent } from './bill-activity.component';

describe('BillActivityComponent', () => {
  let component: BillActivityComponent;
  let fixture: ComponentFixture<BillActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
