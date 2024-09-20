import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  products = [
    { name: 'Snowfall', price: 70, imageUrl: 'C:\Users\cheet\Advanced-Web-Application\frontend\src\app\assets\images\Flowers\Snowfall.webp' },
    { name: 'Dawns Delight', price: 70, imageUrl: 'C:\Users\cheet\Advanced-Web-Application\frontend\src\app\assets\images\Flowers\Dawns Delight.webp' },
    { name: 'Pink Elegance', price: 70, imageUrl: 'path-to-image3.jpg' },
    { name: 'Rustic Charm', price: 70, imageUrl: 'path-to-image4.jpg' },
    { name: 'Autumn Symphony', price: 70, imageUrl: 'path-to-image5.jpg' },
    { name: 'Rosy Delight', price: 70, imageUrl: 'path-to-image6.jpg' },
    { name: 'Serenity', price: 89, imageUrl: 'path-to-image7.jpg' },
    { name: 'Blue Harmony', price: 55, imageUrl: 'path-to-image8.jpg' },
    { name: 'Mystical Majesty', price: 80, imageUrl: 'path-to-image9.jpg' },
    { name: 'Blazing Blossoms', price: 75, imageUrl: 'path-to-image10.jpg' },
  ];
}

