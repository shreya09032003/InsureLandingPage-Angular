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
      image: '../../assets/images/service1.jpg', 
      subtitle: 'INSURANCE VEHICLE',
      title: 'Business Insurance'
    },
    {
      image: '../../assets/images/service2.jpg',
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
