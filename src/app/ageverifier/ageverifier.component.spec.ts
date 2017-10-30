/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgeverifierComponent } from './ageverifier.component';

describe('AgeverifierComponent', () => {
  let component: AgeverifierComponent;
  let fixture: ComponentFixture<AgeverifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeverifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeverifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
