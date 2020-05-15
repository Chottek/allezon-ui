import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuctionComponent} from './components/auction/auction.component';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  {
    path: 'auctions',
    component: AuctionComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
