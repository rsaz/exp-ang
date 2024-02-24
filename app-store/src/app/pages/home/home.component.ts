import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Array<Product> = [];
  totalItems: number = 0;
  rows: number = 5;

  onSentProduct(product: Product) {
    console.log('Product sent:', product);
  }

  constructor(private productService: ProductService) {}

  fetchProducts(page: number, perPage: number) {
    this.productService
      .getProducts('http://localhost:3000/product/getall', { page, perPage })
      .subscribe((products) => {
        this.products = products.items;
        this.totalItems = products.total;
      });
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
