import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuablogComponent } from './suablog.component';

describe('SuablogComponent', () => {
  let component: SuablogComponent;
  let fixture: ComponentFixture<SuablogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuablogComponent]
    });
    fixture = TestBed.createComponent(SuablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
