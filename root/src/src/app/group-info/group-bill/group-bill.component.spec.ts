import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBillComponent } from './group-bill.component';

describe('GroupBillComponent', () => {
  let component: GroupBillComponent;
  let fixture: ComponentFixture<GroupBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
