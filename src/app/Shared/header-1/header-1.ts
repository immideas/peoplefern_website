import { Component, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-1',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-1.html',
  styleUrl: './header-1.css'
})
export class Header1 {

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onActiveChange(element: HTMLElement, isActive: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;

    if (isActive) {
      this.renderer.addClass(element, 'activePage');
    } else {
      this.renderer.removeClass(element, 'activePage');
    }
  }
}
