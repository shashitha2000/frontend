import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AdminComponent } from './component/admin/admin.component';
import { ArViewerComponent } from './component/ar-viewer/ar-viewer.component';
import { AssociateComponent } from './component/associate/associate.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { BotuiComponent } from './component/botui/botui.component';
import { CardComponent } from './component/card/card.component';
import { CarnageComponent } from './component/carnage/carnage.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ClothShopOwnerComponent } from './component/cloth-shop-owner/cloth-shop-owner.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DineComponent } from './component/dine/dine.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterDialogComponent } from './component/login-register-dialog/login-register-dialog.component';
import { LogoSliderComponent } from './component/logo-slider/logo-slider.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MovieAddComponent } from './component/movie-add/movie-add.component';
import { OffersComponent } from './component/offers/offers.component';
import { PopupComponent } from './component/popup/popup.component';
import { PVRCinemaComponent } from './component/pvr-cinema/pvr-cinema.component';
import { ShopComponent } from './component/shop/shop.component';
import { SliderComponent } from './component/slider/slider.component';
import { SrilankanCuisineComponent } from './component/srilankan-cuisine/srilankan-cuisine.component';
import { StayComponent } from './component/stay/stay.component';
import { TableComponent } from './component/table/table.component';
import { TheaterOwnerDashboardComponent } from './component/theater-owner-dashboard/theater-owner-dashboard.component';
import { TicketReservationComponent } from './component/ticket-reservation/ticket-reservation.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material-module';
import { MockAuthService } from './service/mock-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent,
    UserdetailComponent,
    AuthDialogComponent,
    LoginRegisterDialogComponent,
    DashboardComponent,
    DineComponent,
    SrilankanCuisineComponent,
    PVRCinemaComponent,
    TicketReservationComponent,
    CheckoutComponent,
    CartComponent,
    ShopComponent,
    AdminComponent,
    TheaterOwnerDashboardComponent,
    StayComponent,
    MovieAddComponent,
    CarnageComponent,
    ClothShopOwnerComponent,
    OffersComponent,
    ManageProductsComponent,
    LogoSliderComponent,
    BotuiComponent,
    ArViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    WebcamModule
    
    
    
    
  ],
  providers: [MockAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
