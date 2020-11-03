import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  subject = new Subject()

  sendData(product){
    this.subject.next(product)
  }

  getData(){
    return this.subject.asObservable()
  }

  constructor() { }
}
