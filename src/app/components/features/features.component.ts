import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: '../../assets/images/money-back.png', 
      title: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      icon: '../../assets/images/claim.png',
      title: 'All Claims At Anytime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      icon: '../../assets/images/insurance-policy.png',
      title: 'Digital Insurance Policy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      icon: '../../assets/images/mobile-payment.png',
      title: 'Direct Payment App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    }
  ];
   
}
