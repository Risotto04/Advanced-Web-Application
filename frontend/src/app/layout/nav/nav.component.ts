import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@shared/services/user.service';

interface CartItem {
  name: string;
  price: number;
  img: string;
}
@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isModalOpen = false;
  cartItems: CartItem[] = [ {
      name: 'Snowfall',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/Snowfall.webp',
    },
    {
      name: 'Dawns Delight',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/DawnsDelight.webp',
    },
    {
      name: 'Pink Elegance',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/PinkElegance.webp',
    },
    {
      name: 'Rustic Charm',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/RusticCharm.webp',
    },
    {
      name: 'Autumn Symphony',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp',
    },
    {
      name: 'Rosy Delight',
      price: 70,
      img: 'images/Flowers/Fresh Flowers/RosyDelight.webp',
    },
    {
      name: 'Serenity',
      price: 89,
      img: 'images/Flowers/Fresh Flowers/Serenity.webp',
    },];
  subtotal = 0;
  giftMessage = '';
  isauthenticated: boolean;

  constructor(private router: Router, private user: UserService) {
    this.isauthenticated = user.isAuthenticated();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
    this.isModalOpen = false;
  }

  scrollToContact() {
    this.router.navigate(['/home']).then(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  navigateToSignIn() {
    this.router.navigate(['/']);
  }

  onSignOut() {
    this.router.navigate(['/']);
    this.user.signout().subscribe();
  }

  onOverlayClick(event: MouseEvent): void {
    const modal = document.getElementById('modal');

    if (event.target === modal) {
      this.closeModal();
    }
  }
}
