import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangComponent } from './khachhang.component';

describe('KhachhangComponent', () => {
  let component: KhachhangComponent;
  let fixture: ComponentFixture<KhachhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhachhangComponent]
    });
    fixture = TestBed.createComponent(KhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
