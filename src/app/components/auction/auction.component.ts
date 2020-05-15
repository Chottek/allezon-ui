import {Component, OnInit} from '@angular/core';
import {AuctionService} from '../../services/auction/auction.service';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  public auctions;

  constructor(private auctionService: AuctionService) {
  }

  ngOnInit(): void {
    this.getAllAuctions();
  }

  getAllAuctions() {
    return this.auctionService.getAllAuctions().subscribe(
      data => {
        this.auctions = data;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Successfuly got');
      }
    );
  }

}
