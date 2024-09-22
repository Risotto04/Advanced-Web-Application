import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'] 
})
export class ProductDetailComponent {
  quantity = 0;
  priceOption = 'one-time';

  Products = [
    { name: 'Snowfall', price: 70, imageUrl: 'images/Flowers/Fresh Flowers/Snowfall.webp' }
  ];

  combos = [
    { name: 'Pink Elegance', price: 70, imageUrl: 'images/Flowers/Fresh Flowers/PinkElegance.webp' },
    { name: 'Autumn Symphony', price: 70, imageUrl: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp' },
    { name: 'Serenity', price: 89, imageUrl: 'images/Flowers/Fresh Flowers/Serenity.webp' },
    { name: 'Mystical Majesty', price: 80, imageUrl: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp' },
  ];

  recommendedProducts = [
    { name: 'Pink Elegance', price: 70, imageUrl: 'images/Flowers/Fresh Flowers/PinkElegance.webp' },
    { name: 'Autumn Symphony', price: 70, imageUrl: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp' },
    { name: 'Serenity', price: 89, imageUrl: 'images/Flowers/Fresh Flowers/Serenity.webp' },
    { name: 'Mystical Majesty', price: 80, imageUrl: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp' },
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

