import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienComponent } from './nhanvien.component';

describe('NhanvienComponent', () => {
  let component: NhanvienComponent;
  let fixture: ComponentFixture<NhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhanvienComponent]
    });
    fixture = TestBed.createComponent(NhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
