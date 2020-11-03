import { Injectable } from '@angular/core';
import { Product } from '../product/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Geode Puzzle', 79.00, './assets/images/geode-puzzle.jpg'),
    new Product(2, 'Math Equation Glasses', 40.00, './assets/images/math-shots.jpg'),
    new Product(3, 'Smartphone Sanitizer', 179.00, './assets/images/phone-san.jpg'),
    new Product(4, 'Kitty Cat Mugs', 45.00, './assets/images/cat-mugs.jpg'),
    new Product(5, 'Unicorn Cake Set', 69.00, './assets/images/cake-set.jpg'),
    new Product(6,'Hourglass', 80.00, './assets/images/hour-glass.jpg'),
    new Product(7, 'Mountain Pen Holder', 39.00, './assets/images/pen-holder.jpg'),
    new Product(8, 'Retro Image Reel', 79.00, './assets/images/reel.jpg'),
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products
  }
}