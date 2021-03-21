import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonDataService {

  private subject = new Subject<any>();

  salonService = [
    {
      'name' : 'Men Grooming',
      'subService' : [
        {
          'name': 'Hair Cut',
          'cost': '200/-',
          'desc': ''
        },
        {
          'name': 'Shave',
          'cost': '150/-',
          'desc': ''
        }
      ]
    },
    {
      'name' : 'Women Grooming',
      'subService' : [
        {
          'name': 'Hair Cut',
          'cost': '200/-',
          'desc': ''
        },
        {
          'name': 'Threading',
          'cost': '50/-',
          'desc': ''
        }
      ]
    }
  ]

  constructor() { }
  
  sendServiceDetails(i : number , j : number) {
    this.subject.next({ service: this.salonService[i].subService[j] });
  }

  clearServiceDEtails() {
    this.subject.next();
  }

  getSalaonServiceDetails(): Observable<any> {
    return this.subject.asObservable();
  }

  getMenuList(){
    let menuArray = this.salonService.map(e=>{
      let obj = {}
      obj = {
        'mainMenu' : e.name,
        'childMenu' : e.subService.map(el=>el.name)
      }
      return obj;
    })
    return menuArray;
  }

}
