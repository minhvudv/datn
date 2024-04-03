import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemblogComponent } from './themblog.component';

describe('ThemblogComponent', () => {
  let component: ThemblogComponent;
  let fixture: ComponentFixture<ThemblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemblogComponent]
    });
    fixture = TestBed.createComponent(ThemblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
