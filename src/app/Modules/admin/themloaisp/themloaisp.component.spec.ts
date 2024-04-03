import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemloaispComponent } from './themloaisp.component';

describe('ThemloaispComponent', () => {
  let component: ThemloaispComponent;
  let fixture: ComponentFixture<ThemloaispComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemloaispComponent]
    });
    fixture = TestBed.createComponent(ThemloaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
