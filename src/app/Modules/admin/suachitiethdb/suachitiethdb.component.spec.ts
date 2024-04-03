import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuachitiethdbComponent } from './suachitiethdb.component';

describe('SuachitiethdbComponent', () => {
  let component: SuachitiethdbComponent;
  let fixture: ComponentFixture<SuachitiethdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuachitiethdbComponent]
    });
    fixture = TestBed.createComponent(SuachitiethdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
