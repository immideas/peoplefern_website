import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-shop',
  imports: [Breadcrumb,CommonModule,RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements OnInit, AfterViewInit {
  @ViewChild('rangeProgress', { static: false }) rangeProgressRef!: ElementRef;

  // Grid/List view state
  isGridView: boolean = true;

  // Price range slider state
  minPrice: number = 2500;
  maxPrice: number = 7500;
  minRange: number = 0;
  maxRange: number = 10000;
  priceGap: number = 1000;

  categories = [
  'Brochures & Catalogues',
  'Business Cards',
  'Calendars printing',
  'Design Online',
  'Flyers Design',
  'Folded Leaflets',
  't-shirt printing',
  'Gift item printing'
];

ratings = [
  { stars: 5, id: 'starFive' },
  { stars: 4, id: 'starFour' },
  { stars: 3, id: 'starThree' },
  { stars: 2, id: 'starTwo' },
  { stars: 1, id: 'starOne' }
];

tags = [
  'Sweat Shirt',
  'Banner design',
  'Brochure',
  'Business Card',
  'Landing',
  'Brochure',
  'Tryptich Brochure',
  'Cap'
];

products = [
    {
      name: 'Smart wireless headphone',
      price: '$112.00',
      img: 'assets/images/thumbs/product-img1.png',
      rating: 4
    },
    {
      name: 'Wireless gaming mouse',
      price: '$75.00',
      img: 'assets/images/thumbs/product-img2.png',
      rating: 5
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img3.png',
      rating: 3
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img4.png',
      rating: 3
    },
    {
      name: 'Smart wireless headphone',
      price: '$112.00',
      img: 'assets/images/thumbs/product-img5.png',
      rating: 4
    },
    {
      name: 'Wireless gaming mouse',
      price: '$75.00',
      img: 'assets/images/thumbs/product-img6.png',
      rating: 5
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img7.png',
      rating: 3
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img8.png',
      rating: 3
    },
    {
      name: 'Smart wireless headphone',
      price: '$112.00',
      img: 'assets/images/thumbs/product-img9.png',
      rating: 4
    },
    {
      name: 'Wireless gaming mouse',
      price: '$75.00',
      img: 'assets/images/thumbs/product-img10.png',
      rating: 5
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img11.png',
      rating: 3
    },
    {
      name: 'Portable speaker',
      price: '$60.00',
      img: 'assets/images/thumbs/product-img12.png',
      rating: 3
    },
    
  ];
  constructor(
    private animationService: AnimationService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setupGridView();
    // Initialize range visual after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.updateRangeVisual();
    }, 100);
  }
  
  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // Setup initial grid view state
  private setupGridView(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isGridView) {
      this.renderer.addClass(document.body, 'grid-view');
    } else {
      this.renderer.removeClass(document.body, 'grid-view');
    }
  }

  // Toggle to list view
  onListViewClick(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isGridView = false;
    this.renderer.removeClass(document.body, 'grid-view');
  }

  // Toggle to grid view
  onGridViewClick(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isGridView = true;
    this.renderer.addClass(document.body, 'grid-view');
  }

  // Get button classes for list view button
  getListViewButtonClasses(): string {
    return this.isGridView ? 'tw-text-2xl hover-text-main-600 tw-leading-none text-heading list-view-btn' : 'tw-text-2xl hover-text-main-600 tw-leading-none text-main-600 list-view-btn';
  }

  // Get button classes for grid view button
  getGridViewButtonClasses(): string {
    return this.isGridView ? 'tw-text-2xl hover-text-main-600 tw-leading-none text-main-600 grid-view-btn' : 'tw-text-2xl hover-text-main-600 tw-leading-none text-heading grid-view-btn';
  }

  // Price range slider methods
  onMinPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newMinPrice = parseInt(target.value, 10);
    
    if (this.maxPrice - newMinPrice >= this.priceGap && newMinPrice >= this.minRange) {
      this.minPrice = newMinPrice;
      this.updateRangeVisual();
    } else {
      // Reset to valid value
      target.value = this.minPrice.toString();
    }
  }

  onMaxPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newMaxPrice = parseInt(target.value, 10);
    
    if (newMaxPrice - this.minPrice >= this.priceGap && newMaxPrice <= this.maxRange) {
      this.maxPrice = newMaxPrice;
      this.updateRangeVisual();
    } else {
      // Reset to valid value
      target.value = this.maxPrice.toString();
    }
  }

  onMinRangeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newMinVal = parseInt(target.value, 10);
    
    if (this.maxPrice - newMinVal < this.priceGap) {
      this.minPrice = this.maxPrice - this.priceGap;
      target.value = this.minPrice.toString();
    } else {
      this.minPrice = newMinVal;
    }
    this.updateRangeVisual();
  }

  onMaxRangeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newMaxVal = parseInt(target.value, 10);
    
    if (newMaxVal - this.minPrice < this.priceGap) {
      this.maxPrice = this.minPrice + this.priceGap;
      target.value = this.maxPrice.toString();
    } else {
      this.maxPrice = newMaxVal;
    }
    this.updateRangeVisual();
  }

  private updateRangeVisual(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const rangeElement = this.rangeProgressRef?.nativeElement;
    if (rangeElement) {
      const minPercent = (this.minPrice / this.maxRange) * 100;
      const maxPercent = 100 - (this.maxPrice / this.maxRange) * 100;
      
      this.renderer.setStyle(rangeElement, 'insetInlineStart', minPercent + '%');
      this.renderer.setStyle(rangeElement, 'insetInlineEnd', maxPercent + '%');
    }
  }

  onFilterClick(): void {
    // Handle filter button click
    ;
    // Add your filtering logic here
  }
}
