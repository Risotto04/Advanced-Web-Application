import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { UserService } from '@shared/services/user.service';
import { ICartItem } from '../../../types/cartItem';
import { ArrayBufferToBase64 } from '../../../lib/arrayBufferToBase64';
import { CookieService } from 'ngx-cookie-service';
import { IProduct } from '../../../types/product';
import { User } from '@shared/models/user';

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isModalOpen = false;
  isModalOpenAccount = false;

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phonenumber: string = '';
  message: string = '';

  subtotal = 0;
  giftMessage = '';
  isauthenticated: boolean;
  arrayBufferToBase64 = ArrayBufferToBase64;

  userId = '66efdf8f0201e7a529674650';

  cartItems!: productWithQuantity[];
  authorized!: any;
  quantity!: number;

  constructor(
    private router: Router,
    private user: UserService,
    private cartItemService: CartItemService,
    private cookieService: CookieService
  ) {
    this.isauthenticated = user.isAuthenticated();
  }

  ngOnInit() {
    this.authorized = this.cookieService.get('Authorization');
    this.cartItems = this.cartItemService.getCartItemTemp();

    if (this.authorized) {
      // อัปเดตสถานะการล็อกอิน
      this.isauthenticated = true;
      this.loadUserData(); // เรียกโหลดข้อมูลของผู้ใช้

    } else {
      // ผู้ใช้ไม่ได้ล็อกอิน
      this.isauthenticated = false;

    }
  }
  openModalAccount() {
    this.loadUserData();
    this.isModalOpenAccount = true;
    setTimeout(() => {
      const modalOverlay = document.querySelector('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.classList.add('show'); // Add show class for animation
      }
    }, 10);
  }

  ngDoCheck() {
    this.subtotal = this.cartItemService.getSubtotalTemp();
    this.quantity = this.cartItemService.getTotalQuantity();
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
  closeModalAccount() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('show'); // Remove show class for animation
      setTimeout(() => {
        this.isModalOpen = false; // Close modal after animation
      }, 300); // Match the duration of the CSS transition
    }
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

  onRemoveCartItem(p_id: string) {
    this.cartItemService.removeCartItem(p_id);
  }
  onOverlayClickupdate(event: MouseEvent): void {
    const modalupdate = document.getElementById('modalupdate');
    if (event.target === modalupdate) {
      this.closeModalAccount();  // ปิด modal update
    }
  }

  submitForm() {
    this.user.updateUserDetails(
      this.firstname || '',
      this.lastname || '',
      this.email || '',
      this.phonenumber || ''
    )
      .subscribe(
        data => {
          this.message = 'Updated Success';
        },
        error => {
          if (error.status === 409) {
            this.message = 'Email already exists';
          } else {
            this.message = 'Error updating';
          }
          console.log(error.message);
        });
  }


  loadUserData() {
    const userId = this.userId; 
    this.user.getUser(userId).subscribe(
      (userData: User) => {
        this.firstname = userData.firstname ?? '';  
        this.lastname = userData.lastname ?? '';
        this.email = userData.email ?? '';
        this.phonenumber = userData.phone_number ?? '';
      },
      error => {
        console.log('Error loading user data:', error);
      }
    );
  }

}

interface productWithQuantity {
  product: IProduct;
  quantity: number;
}
