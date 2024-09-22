import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@shared/services/product/product.service';
import { IProduct } from '../../../types/product';
import { ArrayBufferToBase64 } from '../../../lib';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  quantity = 0;
  priceOption = 'one-time';
  productId: string;
  products!: IProduct;
  category!: string;
  arrayBufferToBase64 = ArrayBufferToBase64;
  isActive: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: ProductService
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
}
