import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-header-2',
  imports: [RouterLink, RouterLinkActive, CommonModule, NgFor],
  templateUrl: './header-2.html',
  styleUrl: './header-2.css'
})
export class Header2 {
  selectedCurrency: string = 'US Dollar';

  currencyOptions = [
    'US Dollar',
    'British Pound',
    'Japanese Yen',
    'Swiss Franc',
    'Canadian Dollar'
  ];

  constructor(private router: Router) {}

  onActiveChange(element: HTMLElement, isActive: boolean) {
    if (isActive) {
      element.classList.add('activePage');
    } else {
      element.classList.remove('activePage');
    }
  }

  // Check if any of the home routes are active
  isHomeActive(): boolean {
    const homeRoutes = ['/', '/index', '/index-2', '/index-3', '/home', '/index-5', '/index-6'];
    const currentPath = this.router.url;
    return homeRoutes.some(route => currentPath === route);
  }

  // Check if any of the pages routes are active
  isPagesActive(): boolean {
    const pagesRoutes = ['/pricing-plan', '/about', '/app-intigration', '/intigration-details', '/policy-privacy', '/faq', '/project-details', '/service-details'];
    const currentPath = this.router.url;
    return pagesRoutes.some(route => currentPath === route);
  }

  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
  }
}
