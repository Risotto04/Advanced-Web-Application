import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../types/product';
import { ArrayBufferToBase64 } from '../../../lib/arrayBufferToBase64';
import { IProductCategory } from '../../../types/productCategory';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@shared/services/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categoryId: string;
  items!: IProduct[];
  arrayBufferToBase64 = ArrayBufferToBase64;
  productCategor!: IProductCategory[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: ProductService
  ) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId')!;
  }
  ngOnInit() {
    this.httpService.getProductsByIdCategory(this.categoryId).subscribe(
      (response) => {
        this.items = response.data;
        this.productCategor = response._data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
