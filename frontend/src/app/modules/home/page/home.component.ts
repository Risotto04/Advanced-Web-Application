import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '@shared/services/productCategory/product-category.service';
import { IProductCategory } from '../../../../types/productCategory';
import { ArrayBufferToBase64 } from '../../../../lib/arrayBufferToBase64';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  items!: IProductCategory[];
  arrayBufferToBase64 = ArrayBufferToBase64;
  constructor(private httpService: ProductCategoryService) {}

  ngOnInit() {
    AOS.init({
      mirror: true,
      once: false,
      easing: 'ease',
      duration: 750,
    });
    setTimeout(() => {
      AOS.refreshHard();
    }, 250);
    this.httpService.getProductCategory().subscribe(
      (response) => {
        this.items = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
