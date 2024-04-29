import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankanCuisineComponent } from './srilankan-cuisine.component';

describe('SrilankanCuisineComponent', () => {
  let component: SrilankanCuisineComponent;
  let fixture: ComponentFixture<SrilankanCuisineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrilankanCuisineComponent]
    });
    fixture = TestBed.createComponent(SrilankanCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
