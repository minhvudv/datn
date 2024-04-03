import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiethdnComponent } from './chitiethdn.component';

describe('ChitiethdnComponent', () => {
  let component: ChitiethdnComponent;
  let fixture: ComponentFixture<ChitiethdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitiethdnComponent]
    });
    fixture = TestBed.createComponent(ChitiethdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
