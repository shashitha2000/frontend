import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineComponent } from './dine.component';

describe('DineComponent', () => {
  let component: DineComponent;
  let fixture: ComponentFixture<DineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DineComponent]
    });
    fixture = TestBed.createComponent(DineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
