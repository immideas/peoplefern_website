import { Component, Input } from '@angular/core';
import { MegaMenu } from '../mega-menu/mega-menu';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu-three',
  imports: [MegaMenu, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu-three.html',
  styleUrls: ['./nav-menu-three.css']
})
export class NavMenuThree {
    @Input() class: string = '';

    constructor(private router: Router) {}

    onActiveChange(element: HTMLElement, isActive: boolean) {
        if (isActive) {
            element.classList.add('activePage');
        } else {
            element.classList.remove('activePage');
        }
    }

    // Check if any of the submenu routes are active
    isPagesActive(): boolean {
        const pagesRoutes = ['/pricing-plan', '/about', '/app-intigration', '/intigration-details', '/policy-privacy', '/faq', '/project-details', '/service-details'];
        const currentPath = this.router.url;
        return pagesRoutes.some(route => currentPath === route);
    }

    isShopActive(): boolean {
        const shopRoutes = ['/shop', '/shop-details', '/cart', '/checkout'];
        const currentPath = this.router.url;
        return shopRoutes.some(route => currentPath === route);
    }

    isBlogActive(): boolean {
        const blogRoutes = ['/blog', '/blog-details'];
        const currentPath = this.router.url;
        return blogRoutes.some(route => currentPath === route);
    }
}
