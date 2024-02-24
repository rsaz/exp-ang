import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { PaginationParams, Products } from '../../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProducts(url: string, params: PaginationParams): Observable<Products> {
    return this.apiService.get(url, { params, responseType: 'json' });
  }
}
