import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionComponent } from './components/auction/auction.component';
import { UserComponent } from './components/user/user.component';
import {AuctionService} from './services/auction/auction.service';
import {UserService} from './services/user/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuctionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
