import { WayComponent } from './components/way/way.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
import { OrderComponent } from './components/order/order.component';
import { NewScootComponent } from './components/new-scoot/new-scoot.component';
import { NewRouteComponent } from './components/new-route/new-route.component';
const routes: Routes = [ {
path: '', redirectTo: 'About' , pathMatch: 'full'},
{ path: 'Registration', component: RegistrationComponent },
{ path: 'Login', component:LogInComponent},
{ path: 'About', component:AboutComponent},
{ path: 'Home', component:HomeComponent},
{ path: 'Way', component:WayComponent},
{ path: 'Order', component:OrderComponent},
{ path: 'NewScoot', component:NewScootComponent},
{ path: 'NewRoute', component:NewRouteComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
