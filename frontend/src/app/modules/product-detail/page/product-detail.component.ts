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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: ProductService,
    private cartItemService: CartItemService,
    private cookieService: CookieService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.category = this.route.snapshot.paramMap.get('category')!;
  }
  ngOnInit(): void {
    this.authorized = this.cookieService.get('Authorization');

    this.httpService.getProductsById(this.productId).subscribe(
      (response) => {
        this.products = response.data as IProduct;
        this.isActive = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  combos = [
    {
      name: 'Pink Elegance',
      price: 70,
      imageUrl: 'images/Flowers/Fresh Flowers/PinkElegance.webp',
    },
    {
      name: 'Autumn Symphony',
      price: 70,
      imageUrl: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp',
    },
    {
      name: 'Serenity',
      price: 89,
      imageUrl: 'images/Flowers/Fresh Flowers/Serenity.webp',
    },
    {
      name: 'Mystical Majesty',
      price: 80,
      imageUrl: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp',
    },
  ];

  recommendedProducts = [
    {
      name: 'Pink Elegance',
      price: 70,
      imageUrl: 'images/Flowers/Fresh Flowers/PinkElegance.webp',
    },
    {
      name: 'Autumn Symphony',
      price: 70,
      imageUrl: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp',
    },
    {
      name: 'Serenity',
      price: 89,
      imageUrl: 'images/Flowers/Fresh Flowers/Serenity.webp',
    },
    {
      name: 'Mystical Majesty',
      price: 80,
      imageUrl: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp',
    },
  ];

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addProducttoCart() {
    if (this.authorized) {
      this.onCreateCartItem();
    } else {
      this.onAddCartItemTemp();
    }
  }

  onCreateCartItem() {
    this.cartItemService
      .createCartItem(
        this.cartId || '',
        this.productId || '',
        this.quantity || 0
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onAddCartItemTemp() {
    this.cartItemService.addTempCartItem({
      product_id: this.products,
      id: '',
      quantity: this.quantity,
      cart_id: new Cart(),
    });
  }
}
