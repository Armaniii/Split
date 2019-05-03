import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPage } from './split.page';

describe('SplitPage', () => {
  let component: SplitPage;
  let fixture: ComponentFixture<SplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
