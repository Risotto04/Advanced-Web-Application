import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  products = [
    { name: 'Snowfall', price: 70, imageUrl: 'assets/images/Flowers/Snowfall.jpg' },
    { name: 'Dawn\'s Delight', price: 70, imageUrl: 'assets/images/Flowers/Dawns_Delight.webp' },
    { name: 'Pink Elegance', price: 70, imageUrl: 'assets/images/Flowers/Pink_Elegance.webp' },
    { name: 'Rustic Charm', price: 70, imageUrl: 'assets/images/Flowers/Rustic_Charm.webp' },
    { name: 'Autumn Symphony', price: 70, imageUrl: 'assets/images/Flowers/Autumn_Symphony.webp' },
    { name: 'Rosy Delight', price: 70, imageUrl: 'assets/images/Flowers/Rosy_Delight.webp' },
    { name: 'Serenity', price: 89, imageUrl: 'assets/images/Flowers/Serenity.webp' },
    { name: 'Blue Harmony', price: 55, imageUrl: 'assets/images/Flowers/Blue_Harmony.webp' },
    { name: 'Mystical Majesty', price: 80, imageUrl: 'assets/images/Flowers/Mystical_Majesty.webp' },
    { name: 'Blazing Blossoms', price: 75, imageUrl: 'assets/images/Flowers/Blazing_Blossoms.webp' },
  ];
  
}

