import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { CountryComponent } from './country/country.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'colors', component: ColorComponent },
{ path: 'Country',component: CountryComponent },
{ path: 'nav',component: NavComponent},
{ path: 'user',component:UserComponent}


];
@NgModule({