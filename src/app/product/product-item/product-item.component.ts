import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})


export class ProductItemComponent implements OnInit {
    products: Product[] = [
      new Product('Geode Puzzle', '79.00', './assets/images/geode-puzzle.jpg'),
      new Product('Math Equation Glasses', '40.00', './assets/images/math-shots.jpg'),
      new Product('Smartphone Sanitizer', '179.00', './assets/images/phone-san.jpg'),
      new Product('Kitty Cat Mugs', '45.00', './assets/images/cat-mugs.jpg'),
      new Product('Unicorn Cake Set', '69.00', './assets/images/cake-set.jpg'),
      new Product('Hourglass', '80.00', './assets/images/hour-glass.jpg'),
      new Product('Mountain Pen Holder', '39.00', './assets/images/pen-holder.jpg'),
      new Product('Retro Image Reel', '79.00', './assets/images/reel.jpg'),
]
  

  constructor() { }

  ngOnInit(): void {
  }

}
