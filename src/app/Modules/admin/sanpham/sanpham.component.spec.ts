import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamComponent } from './sanpham.component';

describe('SanphamComponent', () => {
  let component: SanphamComponent;
  let fixture: ComponentFixture<SanphamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanphamComponent]
    });
    fixture = TestBed.createComponent(SanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
