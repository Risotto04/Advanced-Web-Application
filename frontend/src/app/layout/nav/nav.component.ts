import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { UserService } from '@shared/services/user.service';
import { ICartItem } from '../../../types/cartItem';
import { ArrayBufferToBase64 } from '../../../lib';
import { CookieService } from 'ngx-cookie-service';


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

  cartItems!: ICartItem[];
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

    if(this.authorized) {
      this.httpService.getCartItemsByUserId(this.userId).subscribe(
        (response) => {
          this.cartItems = response.data;
          this.calculateSubtotal();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      this.cartItems = this.httpService.getCartItemTemp();
    }
    
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => {
      const price = (item.product_id?.price ?? 0)*item.quantity;
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