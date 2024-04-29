import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnageComponent } from './carnage.component';

describe('CarnageComponent', () => {
  let component: CarnageComponent;
  let fixture: ComponentFixture<CarnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarnageComponent]
    });
    fixture = TestBed.createComponent(CarnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
