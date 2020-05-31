import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Products } from '../productList';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = Products;
  selectedProduct: Product;

  constructor() { }

  ngOnInit() {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
