import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SualoaispComponent } from './sualoaisp.component';

describe('SualoaispComponent', () => {
  let component: SualoaispComponent;
  let fixture: ComponentFixture<SualoaispComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SualoaispComponent]
    });
    fixture = TestBed.createComponent(SualoaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
