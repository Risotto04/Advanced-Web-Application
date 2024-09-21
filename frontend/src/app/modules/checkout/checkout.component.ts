import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  state: number = 0;
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
}
