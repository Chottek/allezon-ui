import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) {}

  getAllAuctions(){
     return this.http.get('/server/api/auctions');
  }

  getAuctionById(id: number){
    return this.http.get('/server/api/auctions/get?id=' + id);
  }

}
