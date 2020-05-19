import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuctionComponent} from './components/auction/auction.component';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ShowUserComponent} from './components/user/show-user/show-user.component';
import {ShowAuctionComponent} from './components/auction/show-auction/show-auction.component';


const routes: Routes = [
  {
    path: 'auctions',
    component: AuctionComponent
  },
  {
    path: 'auctions/show',
    component: ShowAuctionComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/show',
    component: ShowUserComponent
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
