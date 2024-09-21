import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface CartItem {
  name: string;
  price: number;
  img: string; // Include the img property in the interface
}

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'], // Corrected this property
})
export class NavComponent {
  isModalOpen = false;
  cartItems: CartItem[] = [
    { name: 'Snowfall', price: 70, img: 'images/Flowers/Fresh Flowers/Snowfall.webp' },
    { name: 'Dawns Delight', price: 70, img: 'images/Flowers/Fresh Flowers/DawnsDelight.webp' },
    { name: 'Pink Elegance', price: 70, img: 'images/Flowers/Fresh Flowers/PinkElegance.webp' },
    { name: 'Rustic Charm', price: 70, img: 'images/Flowers/Fresh Flowers/RusticCharm.webp' },
    { name: 'Autumn Symphony', price: 70, img: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp' },
    { name: 'Rosy Delight', price: 70, img: 'images/Flowers/Fresh Flowers/RosyDelight.webp' },
    { name: 'Serenity', price: 89, img: 'images/Flowers/Fresh Flowers/Serenity.webp' },
    { name: 'Blue Harmony', price: 55, img: 'images/Flowers/Fresh Flowers/BlueHarmony.webp' },
    { name: 'Mystical Majesty', price: 80, img: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp' },
    { name: 'Blazing Blossoms', price: 75, img: 'images/Flowers/Fresh Flowers/BlazingBlossoms.webp' },
  ];
  subtotal = 0;
  giftMessage = '';

  constructor(private router: Router) {}

  openModal() {
    this.calculateSubtotal(); // Calculate subtotal when modal opens
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
    this.isModalOpen = false;
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  scrollToContact() {
    this.router.navigate(['/home']).then(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
