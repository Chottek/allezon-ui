import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuctionComponent} from './components/auction/auction.component';
import {UserComponent} from './components/user/user.component';


const routes: Routes = [
  {
    path: 'auctions',
    component: AuctionComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
