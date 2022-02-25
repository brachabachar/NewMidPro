import { ManagerOrderComponent } from './components/Abuot-base/manager-order/manager-order.component';
import { FuturRentComponent } from './components/futur-rent/futur-rent.component';
import { UserScooterComponent } from './components/Abuot-base/user-scooter/user-scooter.component';
import { ScooterComponent } from './components/scooter/scooter.component';
import { StorageComponent } from './components/storage/storage.component';
import { OrderComponent } from './components/order/order.component';
import { WayComponent } from './components/way/way.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
import { NewScootComponent } from './components/new-scoot/new-scoot.component';
import { NewRouteComponent } from './components/new-route/new-route.component';
import { NoteComponent } from './components/note/note.component';
const routes: Routes = [ 
{path: '', redirectTo: 'About' , pathMatch: 'full'},
{ path: 'Registration', component: RegistrationComponent },
{ path: 'Login', component:LogInComponent},
{ path: 'About', component:AboutComponent},
{ path: 'Home', component:HomeComponent},
{ path: 'Way', component:WayComponent},
{ path: 'NewScoot', component:NewScootComponent},
{ path: 'NewRoute', component:NewRouteComponent},
{ path: 'Order/:eOrder', component:OrderComponent},
{ path: 'Storage/:eStorage', component:StorageComponent},
{ path: 'Scooter/:eScooter', component:ScooterComponent},
{ path: 'user-scooter/:scooterId', component:UserScooterComponent},
{ path: 'managerOrder/:futureOrderId', component:ManagerOrderComponent},


{ path: 'FuturRent', component:FuturRentComponent},
{path:'Note/:eNote',component:NoteComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
