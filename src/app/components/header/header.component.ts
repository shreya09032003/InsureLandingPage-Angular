import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  dropdownOpen = false;

  menuOptions = [
    { label: 'Home' },
    { label: 'Pages'},
    { label: 'Insurances' },
    { label: 'Blog'},
    { label: 'Contact Us'},
  ];

  focusSearch() {
    this.searchInput.nativeElement.classList.remove('hidden');
    this.searchInput.nativeElement.focus();
  }

  toggleSearch(show: boolean) {
    if (!show) {
      this.searchInput.nativeElement.classList.add('hidden');
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
