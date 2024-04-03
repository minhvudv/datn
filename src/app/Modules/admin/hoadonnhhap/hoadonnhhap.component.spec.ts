import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonnhhapComponent } from './hoadonnhhap.component';

describe('HoadonnhhapComponent', () => {
  let component: HoadonnhhapComponent;
  let fixture: ComponentFixture<HoadonnhhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoadonnhhapComponent]
    });
    fixture = TestBed.createComponent(HoadonnhhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
