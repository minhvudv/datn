import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuahoadonbanComponent } from './suahoadonban.component';

describe('SuahoadonbanComponent', () => {
  let component: SuahoadonbanComponent;
  let fixture: ComponentFixture<SuahoadonbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuahoadonbanComponent]
    });
    fixture = TestBed.createComponent(SuahoadonbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
