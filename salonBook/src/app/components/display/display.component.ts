import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalonDataService } from 'src/app/services/salon-data.service';

export interface ServiceInterface{
    name : any,
    cost : any,
    desc : any
}


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  serviceToDisplay : ServiceInterface;
  subscription: Subscription;

  constructor( private salonData : SalonDataService) { 
    this.subscription = this.salonData.getSalaonServiceDetails().subscribe(service => {
      if (service) {
        this.serviceToDisplay = {...service.service};
      } else {
        this.serviceToDisplay = { name : "", cost : "", desc : "" };
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
