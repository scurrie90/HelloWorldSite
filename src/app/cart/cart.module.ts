import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartItemComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
