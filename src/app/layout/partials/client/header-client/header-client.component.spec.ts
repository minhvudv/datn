import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClientComponent } from './header-client.component';

describe('HeaderClientComponent', () => {
  let component: HeaderClientComponent;
  let fixture: ComponentFixture<HeaderClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderClientComponent]
    });
    fixture = TestBed.createComponent(HeaderClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
