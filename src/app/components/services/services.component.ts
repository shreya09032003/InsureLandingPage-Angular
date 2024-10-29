import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      image: '../../assets/images/image7.webp', 
      subtitle: 'INSURANCE VEHICLE',
      title: 'Business Insurance'
    },
    {
      image: '../../assets/images/image8.webp',
      subtitle: 'INSURANCE VEHICLE',
      title: 'Vehicle Insurance'
    },
    {
      image: '../../assets/images/service3.jpg',
   subtitle: 'INSURANCE CAR',
      title: 'Car Insurance'
    }
  ];
}
