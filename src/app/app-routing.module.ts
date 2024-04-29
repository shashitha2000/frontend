import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateComponent } from './component/associate/associate.component';
import { CarnageComponent } from './component/carnage/carnage.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ClothShopOwnerComponent } from './component/cloth-shop-owner/cloth-shop-owner.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DineComponent } from './component/dine/dine.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterDialogComponent } from './component/login-register-dialog/login-register-dialog.component';
import { MovieAddComponent } from './component/movie-add/movie-add.component';
import { OffersComponent } from './component/offers/offers.component';
import { PVRCinemaComponent } from './component/pvr-cinema/pvr-cinema.component';
import { ShopComponent } from './component/shop/shop.component';
import { SliderComponent } from './component/slider/slider.component';
import { SrilankanCuisineComponent } from './component/srilankan-cuisine/srilankan-cuisine.component';
import { StayComponent } from './component/stay/stay.component';
import { TableComponent } from './component/table/table.component';
import { TheaterOwnerDashboardComponent } from './component/theater-owner-dashboard/theater-owner-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'associate',component:AssociateComponent},
  { path: 'login', component: LoginRegisterDialogComponent },
  { path: 'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dine' ,component:DineComponent},
  { path: 'srilankan-cuisine',component:SrilankanCuisineComponent },
  { path: 'pvr-cinema',component:PVRCinemaComponent},
  { path: 'checkout',component:CheckoutComponent},
  { path: 'cart',component:CartComponent},
  { path: 'shop',component:ShopComponent},
  { path: 'theater-owner-dashboard',component:TheaterOwnerDashboardComponent},
  { path: 'stay',component:StayComponent},
  { path: 'add-movie',component:MovieAddComponent},
  { path: 'carnage',component:CarnageComponent},
  { path: 'cloth-shop-owner',component:ClothShopOwnerComponent},
  { path: 'offers',component:OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
