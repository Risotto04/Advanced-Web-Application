import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { UserService } from '@shared/services/user.service';
import { ICartItem } from '../../../types/cartItem';
import { ArrayBufferToBase64 } from '../../../lib';

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

  cartItems1: CartItem[] = [ {
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
  arrayBufferToBase64 = ArrayBufferToBase64;

  userId = '66efdf8f0201e7a529674650';

  cartItems!: ICartItem[];

  constructor(private router: Router, private user: UserService, private httpService: CartItemService) {
    this.isauthenticated = user.isAuthenticated();
  }

  ngOnInit() {
    this.httpService.getCartItemsByUserId(this.userId).subscribe(
      (response) => {
        this.cartItems = response.data;
        console.log(this.cartItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems1.reduce(
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
//src="data:image/*;base64,{{arrayBufferToBase64(item.product_id.picture.data)}}"