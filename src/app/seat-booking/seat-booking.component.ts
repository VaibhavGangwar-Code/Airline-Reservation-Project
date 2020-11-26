import { Component, OnInit } from '@angular/core';
import {SeatMappingService} from '../service/SeatMappingService';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  Seats;
  Flight;
  constructor(private seatservice:SeatMappingService) { }

  ngOnInit() {
  }
  fetchdata(Airplane_no,BookedTickets)
  {
    console.log ("enter your Airplane Number");
    debugger;
    this.seatservice.getSeat(Airplane_no,
      BookedTickets).subscribe(
      (data)=>{this.Seats=data;}
    )
  }

}
