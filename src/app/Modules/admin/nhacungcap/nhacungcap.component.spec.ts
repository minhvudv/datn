import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhacungcapComponent } from './nhacungcap.component';

describe('NhacungcapComponent', () => {
  let component: NhacungcapComponent;
  let fixture: ComponentFixture<NhacungcapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhacungcapComponent]
    });
    fixture = TestBed.createComponent(NhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
