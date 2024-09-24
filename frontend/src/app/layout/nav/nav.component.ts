import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { UserService } from '@shared/services/user.service';
import { ICartItem } from '../../../types/cartItem';
import { ArrayBufferToBase64 } from '../../../lib/arrayBufferToBase64';
import { CookieService } from 'ngx-cookie-service';
import { IProduct } from '../../../types/product';

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isModalOpen = false;

  subtotal = 0;
  giftMessage = '';
  isauthenticated: boolean;
  arrayBufferToBase64 = ArrayBufferToBase64;

  userId = '66efdf8f0201e7a529674650';

  cartItems!: productWithQuantity[];
  authorized!: any;

  constructor(
    private router: Router,
    private user: UserService,
    private httpService: CartItemService,
    private cookieService: CookieService
  ) {
    this.isauthenticated = user.isAuthenticated();
  }

  ngOnInit() {
    this.authorized = this.cookieService.get('Authorization');

    if (this.authorized) {
        // อัปเดตสถานะการล็อกอิน
        this.isauthenticated = true;
    } else {
        // ผู้ใช้ไม่ได้ล็อกอิน
        this.isauthenticated = false;
        this.cartItems = this.httpService.getCartItemTemp();
    }
}


  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      const modalOverlay = document.querySelector('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.classList.add('show'); // Add show class for animation
      }
    }, 10); // Delay to ensure the modal is in the DOM before adding the class
  }

  closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('show'); // Remove show class for animation
      setTimeout(() => {
        this.isModalOpen = false; // Close modal after animation
      }, 300); // Match the duration of the CSS transition
    }
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => {
      const price = (item.product?.price ?? 0) * item.quantity;
      return total + price;
    }, 0);
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
    this.user.signout().subscribe();
    this.router.navigate(['/']);
  }

  onOverlayClick(event: MouseEvent): void {
    const modal = document.getElementById('modal');

    if (event.target === modal) {
      this.closeModal();
    }
  }
}

interface productWithQuantity {
  product: IProduct;
  quantity: number;
}
