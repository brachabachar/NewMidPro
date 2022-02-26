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
import { FormControl, FormGroup,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { User } from 'src/app/class/user';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { LogInComponent} from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/base-components/navbar/navbar.component';
import { WayComponent } from './components/way/way.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NewScootComponent } from './components/new-scoot/new-scoot.component';
import { NewRouteComponent } from './components/new-route/new-route.component';

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
import { CreateWayComponent } from './components/create-way/create-way.component';
import { ListComponent } from './components/base-components/list/list.component';
import { OrderComponent } from './components/order/order.component';
import { StorageComponent } from './components/storage/storage.component';
import { ScooterComponent } from './components/scooter/scooter.component';
import { AddComponent } from './components/base-components/add/add.component';
import { NoteComponent } from './components/note/note.component';
import { BaseNoteComponent } from './components/base-components/base-note/base-note.component';
import { MapComponent } from './components/map/map.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { UserScooterComponent } from './components/Abuot-base/user-scooter/user-scooter.component';
import { UserOrderComponent } from './components/Abuot-base/user-order/user-order.component';
import { ManagerScooterComponent } from './components/Abuot-base/manager-scooter/manager-scooter.component';
import { ManagerOrderComponent } from './components/Abuot-base/manager-order/manager-order.component';
import { OverlayModule } from '@angular/cdk/overlay';

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
    RentComponent,
    FuturRentComponent,
    CreateWayComponent,
    ListComponent,
    OrderComponent,
    StorageComponent,
    ScooterComponent,
    AddComponent,
    NoteComponent,
    BaseNoteComponent,
      MapComponent,
    UserScooterComponent,
    UserOrderComponent,
    ManagerScooterComponent,
    ManagerOrderComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    GooglePlaceModule, MatAutocompleteModule,MatInputModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),ReactiveFormsModule,FormsModule,MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBs9YFui13oo8KZWLIs7a7Xptdhsp8SRCU',
    libraries: ["places","geometry"],
    }),
    BrowserAnimationsModule,  AgmDirectionModule, 
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule,FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
