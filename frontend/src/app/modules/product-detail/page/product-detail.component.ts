import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@shared/services/product/product.service';
import { IProduct } from '../../../../types/product';
import { ArrayBufferToBase64 } from '../../../../lib/arrayBufferToBase64';
import { PageNotFoundComponent } from '../../page-not-found/page/page-not-found.component';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '@shared/models/cart';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  cartId = '66f00957d882b06ff7d95c4d';

  quantity = 1;
  priceOption = 'one-time';
  productId: string;
  products!: IProduct;
  category!: string;
  arrayBufferToBase64 = ArrayBufferToBase64;
  isActive!: boolean;
  authorized!: any;
  productsRamdom!: IProductRamdom[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: ProductService,
    private cartItemService: CartItemService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.category = this.route.snapshot.paramMap.get('category')!;
  }
  ngOnInit(): void {
    this.httpService.getProductsById(this.productId).subscribe(
      (response) => {
        this.products = response.data as IProduct;
        this.isActive = true;
      },
      (error) => {
        console.log(error);
      }
    );
    this.httpService.getProductsRandom().subscribe(
      (response) => {
        this.productsRamdom = response.data as IProductRamdom[];
        console.log(this.productsRamdom);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  reloadComponent() {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  addProducttoCart() {
    this.cartItemService.addTempCartItem(this.products, this.quantity);
  }
}
interface IProductRamdom extends IProduct {
  category_info: { name: string };
}
