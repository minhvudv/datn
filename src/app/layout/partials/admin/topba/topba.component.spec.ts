import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbaComponent } from './topba.component';

describe('TopbaComponent', () => {
  let component: TopbaComponent;
  let fixture: ComponentFixture<TopbaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbaComponent]
    });
    fixture = TestBed.createComponent(TopbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
