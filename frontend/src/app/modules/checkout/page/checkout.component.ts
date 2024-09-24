import { Component, OnInit } from '@angular/core';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { IProduct } from '../../../../types/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  state: number = 0;
  receivedData = {
    email: '',
    name: '',
    phonenumber: '',
    recipientsname: '',
    recipientsphone: '',
    date: '',
    time: '',
  };


  cartItems!: productWithQuantity[];

  onTextChanged(event: { email: string; name: string; phonenumber: string }) {
    if (event) {
      // ตรวจสอบว่าข้อมูลที่ได้รับไม่เป็น undefined
      this.receivedData.email = event.email || '';
      this.receivedData.name = event.name || '';
      this.receivedData.phonenumber = event.phonenumber || '';

  test = 10;
  onReceivedData(even: any) {
    console.log(even);
    if (even.contatinfoForm) {
      this.receivedData.email = even.contatinfoForm.email;
      this.receivedData.name = even.contatinfoForm.name;
      this.receivedData.phonenumber = even.contatinfoForm.phonenumber;
    } else if (even.shippingForm) {
      this.receivedData.recipientsname = even.shippingForm.recipientsname;
      this.receivedData.recipientsphone = even.shippingForm.recipientsphone;
      this.receivedData.date = even.shippingForm.date;
      this.receivedData.time = even.shippingForm.time;
    }
  }

  constructor() {}
  ngOnInit(): void {}
  getStateStyle(state: number) {
    if (state == this.state) {
      return 'text-[black]';
    }
    return 'text-[gray]';
  }
  getSum() {
    const sum = this.datas.reduce(
      (acc, data) => acc + data.price * data.Quantity,
      0
    );
    return sum;
  }
  setState($event: any) {
    this.state = $event;
  }
  datas = [
    {
      img: 'images/test/1.webp',
      name: 'Snowfall',
      Quantity: 1,
      price: 100,
    },
    {
      img: 'images/test/1.webp',
      name: 'Snowfall',
      Quantity: 10,
      price: 100,
    },
    {
      img: 'images/test/1.webp',
      name: 'Snowfall',
      Quantity: 1,
      price: 100,
    },
    {
      img: 'images/test/1.webp',
      name: 'Snowfall',
      Quantity: 1,
      price: 100,
    },
    {
      img: 'images/test/1.webp',
      name: 'Snowfall',
      Quantity: 1,
      price: 100,
    },
  ];


  constructor(private cartItemService: CartItemService) {
    
  }
  ngOnInit(): void {

    console.log("here");
    this.getCartItem();
  }
  getStateStyle(state: number) {
    if (state == this.state) {
      return 'text-[black]';
    }
    return 'text-[gray]';
  }
  getSum() {
    const sum = this.cartItems.reduce(
      (acc, data) => acc + data.product.price * data.quantity,
      0
    );
    return sum;
  }
  setState($event: any) {
    this.state = $event;
  }

  getCartItem() {
    this.cartItems = this.cartItemService.getCartItemTemp();
  }

}

interface productWithQuantity {
  product: IProduct,
  quantity: number
}