import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductCategory } from '../../../../types/productCategory';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getProductCategory(): Observable<ProductCategoryResponse> {
    return this.http.get<ProductCategoryResponse>(`${this.baseURL}/category`);
  }
}

interface ProductCategoryResponse {
  data: IProductCategory[];
}
