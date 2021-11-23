import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [ {
path: '', redirectTo: 'About' , pathMatch: 'full'},
{ path: 'Registration', component: RegistrationComponent },
{ path: 'Login', component:LogInComponent},
{ path: 'About', component:AboutComponent},
{ path: 'Home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
