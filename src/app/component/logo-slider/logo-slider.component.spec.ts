import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSliderComponent } from './logo-slider.component';

describe('LogoSliderComponent', () => {
  let component: LogoSliderComponent;
  let fixture: ComponentFixture<LogoSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoSliderComponent]
    });
    fixture = TestBed.createComponent(LogoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
