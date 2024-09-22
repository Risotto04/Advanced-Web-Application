import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '@shared/services/productCategory/product-category.service';
import { IProductCategory } from '../../../types/productCategory';
import { ArrayBufferToBase64 } from '../../../lib/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items!: IProductCategory[];
  arrayBufferToBase64 = ArrayBufferToBase64;
  constructor(private httpService: ProductCategoryService) {}

  ngOnInit() {
    this.httpService.getProductCategory().subscribe(
      (response) => {
        this.items = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
