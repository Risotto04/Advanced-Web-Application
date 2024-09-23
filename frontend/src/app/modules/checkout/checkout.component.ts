import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  state: number = 0;

  receivedData!: {
    email: string, 
    name: string,
    phonenumber: string
    recipientsname: string;
    recipientsphone: string;
    date: Date;
    time: Date;
    street: string;
    apartmentnumber: string;
    cardnumber: string;
    expnumber: string;
    cardcode: string;
  }

  onTextChanged(event: {email: string, name: string, phonenumber: string}) {
    if (event) {
      // ตรวจสอบว่าข้อมูลที่ได้รับไม่เป็น undefined
      this.receivedData.email = event.email || '';
      this.receivedData.name = event.name || '';
      this.receivedData.phonenumber = event.phonenumber || '';
    }
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
  constructor() { }
  ngOnInit(): void { }
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
}
