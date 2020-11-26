import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SMmodel} from '../models/SeatMappingModel'; 

@Injectable({providedIn:"root"})

export class SeatMappingService
{
    list:SMmodel[];
    constructor(private http:HttpClient)
    {
        this.list=[];
    }
    public getSeat(Airplane_no,BookedTickets)
    {
        debugger;
        return this.http.get("https://localhost:44311/api/SeatMapping?Airplane_no="+Airplane_no+"&BookedTickets="+BookedTickets);
    }
}