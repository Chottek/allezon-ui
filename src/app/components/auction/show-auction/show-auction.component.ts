import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {AuctionService} from '../../../services/auction/auction.service';

@Component({
  selector: 'app-show-auction',
  templateUrl: './show-auction.component.html',
  styleUrls: ['./show-auction.component.css']
})
export class ShowAuctionComponent implements OnInit {

  constructor(private auctionService: AuctionService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param = params.id;
    });
  }

  public auction;
  public param;

  ngOnInit(): void {
    this.getAuctionById(this.param);
  }

  getAuctionById(id){
    return this.auctionService.getAuctionById(id).subscribe(
      data => {
        this.auction = data;
      },
      err => console.error(err),
      () => console.log('loaded')
    );
  }

}
