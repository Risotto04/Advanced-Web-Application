import { Component } from '@angular/core';

@Component({
  selector: 'app-fresh-flowers',
  templateUrl: './fresh-flowers.component.html',
  styleUrls: ['./fresh-flowers.component.css']
})
export class FreshFlowersComponent {
  items = [
    { name: 'Snowfall', price: 70, img: 'images/Flowers/Fresh Flowers/Snowfall.webp' },
    { name: 'Dawns Delight', price: 70, img: 'images/Flowers/Fresh Flowers/DawnsDelight.webp' },
    { name: 'Pink Elegance', price: 70, img: 'images/Flowers/Fresh Flowers/PinkElegance.webp' },
    { name: 'Rustic Charm', price: 70, img: 'images/Flowers/Fresh Flowers/RusticCharm.webp' },
    { name: 'Autumn Symphony', price: 70, img: 'images/Flowers/Fresh Flowers/AutumnSymphony.webp' },
    { name: 'Rosy Delight', price: 70, img: 'images/Flowers/Fresh Flowers/RosyDelight.webp' },
    { name: 'Serenity', price: 89, img: 'images/Flowers/Fresh Flowers/Serenity.webp' },
    { name: 'Blue Harmony', price: 55, img: 'images/Flowers/Fresh Flowers/BlueHarmony.webp' },
    { name: 'Mystical Majesty', price: 80, img: 'images/Flowers/Fresh Flowers/MysticalMajesty.webp' },
    { name: 'Blazing Blossoms', price: 75, img: 'images/Flowers/Fresh Flowers/BlazingBlossoms.webp' },
  ];
  
}
