import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVRCinemaComponent } from './pvr-cinema.component';

describe('PVRCinemaComponent', () => {
  let component: PVRCinemaComponent;
  let fixture: ComponentFixture<PVRCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PVRCinemaComponent]
    });
    fixture = TestBed.createComponent(PVRCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
