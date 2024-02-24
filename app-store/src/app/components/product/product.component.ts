import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() sendProduct: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.sendProduct.emit(this.product);
  }
}
