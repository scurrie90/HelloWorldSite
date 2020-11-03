import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
     this.productList = this.ProductService.getProducts()
  }

}
