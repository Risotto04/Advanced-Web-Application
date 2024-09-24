import { Component, OnInit } from '@angular/core';

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
}
