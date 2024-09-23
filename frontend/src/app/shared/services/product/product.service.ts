import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../../../types/product';
import { IProductCategory } from '../../../../types/productCategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getProductsByIdCategory(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseURL}/products/${id}`);
  }
  getProductsById(id: string): Observable<{ data: IProduct }> {
    return this.http.get<{ data: IProduct }>(`${this.baseURL}/product/${id}`);
  }
}
interface ProductResponse {
  data: IProduct[];
  _data: IProductCategory[];
}
