import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Product } from '../product.model';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private data: CartItemService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.data.sendData(this.productItem)
  }


}
