import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaispComponent } from './loaisp.component';

describe('LoaispComponent', () => {
  let component: LoaispComponent;
  let fixture: ComponentFixture<LoaispComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaispComponent]
    });
    fixture = TestBed.createComponent(LoaispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
