import { Component } from '@angular/core';
import { HlmButtonDirective } from '@shared/shared.module';
@Component({
  // standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items = [
    { img: 'images/test/1.webp', category: 'Fresh Flowers' },
    { img: 'images/test/2.webp', category: 'Dried Flowers' },
    { img: 'images/test/3.webp', category: 'Live Plants ' },
    { img: 'images/test/4.webp', category: 'Aroma Candels' },
    { img: 'images/test/5.webp', category: 'Fresheners' },
  ];
}
