import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormControl, FormGroup,ReactiveFormsModule  } from '@angular/forms';
import { User } from 'src/app/class/user';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { LogInComponent} from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WayComponent } from './components/way/way.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NewScootComponent } from './components/new-scoot/new-scoot.component';
import { NewRouteComponent } from './components/new-route/new-route.component';
import { OrderComponent } from './components/order/order.component';
 import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AgmDirectionModule } from 'agm-direction'; 
import '@angular/compiler';
//import for GooglePlaceModule
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { RentComponent } from './components/rent/rent.component';
import { FuturRentComponent } from './components/futur-rent/futur-rent.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { CreateWayComponent } from './components/create-way/create-way.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    PersonalAreaComponent,
    LogInComponent,
    AboutComponent,
    NavbarComponent,
    WayComponent,
    CheckoutComponent,
    NewScootComponent,
    NewRouteComponent,
    OrderComponent,
    RentComponent,
    FuturRentComponent,
    MyOrderComponent,
    CreateWayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    GooglePlaceModule, 
    ModalModule.forRoot(),ReactiveFormsModule,MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBs9YFui13oo8KZWLIs7a7Xptdhsp8SRCU',
    libraries: ["places","geometry"],
    }),
    BrowserAnimationsModule,  AgmDirectionModule, 
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
