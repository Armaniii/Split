import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBillFormComponent } from './group-bill-form.component';

describe('GroupBillFormComponent', () => {
  let component: GroupBillFormComponent;
  let fixture: ComponentFixture<GroupBillFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBillFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
