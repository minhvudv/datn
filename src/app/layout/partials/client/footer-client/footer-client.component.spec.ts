import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterClientComponent } from './footer-client.component';

describe('FooterClientComponent', () => {
  let component: FooterClientComponent;
  let fixture: ComponentFixture<FooterClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterClientComponent]
    });
    fixture = TestBed.createComponent(FooterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
