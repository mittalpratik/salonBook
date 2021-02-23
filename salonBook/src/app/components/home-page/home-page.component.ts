import { Component, OnInit } from '@angular/core';
import { SalonDataService } from 'src/app/services/salon-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menuOptions : any;

  constructor(private salonService : SalonDataService) { }

  ngOnInit(): void {
    this.menuOptions = this.salonService.getMenuList();
  }

  selectService(i: number, j : number): void {
    this.salonService.sendServiceDetails(i,j)
}

}
