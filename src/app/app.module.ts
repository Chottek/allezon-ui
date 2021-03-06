import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionComponent } from './components/auction/auction.component';
import { UserComponent } from './components/user/user.component';
import {AuctionService} from './services/auction/auction.service';
import {UserService} from './services/user/user.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { ShowAuctionComponent } from './components/auction/show-auction/show-auction.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ShowUserComponent,
    ShowAuctionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [AuctionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
