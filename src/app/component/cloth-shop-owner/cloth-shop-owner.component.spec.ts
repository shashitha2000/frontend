import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothShopOwnerComponent } from './cloth-shop-owner.component';

describe('ClothShopOwnerComponent', () => {
  let component: ClothShopOwnerComponent;
  let fixture: ComponentFixture<ClothShopOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothShopOwnerComponent]
    });
    fixture = TestBed.createComponent(ClothShopOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
