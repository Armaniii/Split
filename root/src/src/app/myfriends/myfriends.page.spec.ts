import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfriendsPage } from './myfriends.page';

describe('MyfriendsPage', () => {
  let component: MyfriendsPage;
  let fixture: ComponentFixture<MyfriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfriendsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
