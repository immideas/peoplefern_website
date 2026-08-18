import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-index-5',
  imports: [RouterLink, CommonModule],
  templateUrl: './index-5.html',
  styleUrl: './index-5.css'
})
export class Index5 implements AfterViewInit {
  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef;
  @ViewChild('pricingSlider', { static: false }) pricingSlider!: ElementRef;
  
  // Counter ViewChild references
  @ViewChild('clientsCounter1', { static: false }) clientsCounter1!: ElementRef;
  @ViewChild('percentageCounter', { static: false }) percentageCounter!: ElementRef;
  @ViewChild('clientsCounter2', { static: false }) clientsCounter2!: ElementRef;


  slides = [
    { src: 'assets/images/thumbs/brand-three-img1.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img2.png', aosDuration: 700 },
    { src: 'assets/images/thumbs/brand-three-img3.png', aosDuration: 800 },
    { src: 'assets/images/thumbs/brand-three-img4.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img5.png', aosDuration: 700 },
    { src: 'assets/images/thumbs/brand-three-img6.png', aosDuration: 800 },
    { src: 'assets/images/thumbs/brand-three-img7.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img5.png', aosDuration: 700 }
  ];


  testimonials = [
    {
      name: "William Camel",
      role: "Head of Design at Zazoo",
      title: "I had a great experience with printSpace!",
      message: "Good Time is very good in what they're doing...",
      aosDuration: 600
    },
    {
      name: "Robiul Hasan",
      role: "Head of Design at Zazoo",
      title: "I had a great experience with printSpace!",
      message: "Good Time is very good in what they're doing...",
      aosDuration: 600
    },
    {
      name: "John Doe",
      role: "Head of Design at Zazoo",
      title: "I had a great experience with printSpace!",
      message: "Good Time is very good in what they're doing...",
      aosDuration: 600
    },
    {
      name: "John Smith",
      role: "Head of Design at Zazoo",
      title: "I had a great experience with printSpace!",
      message: "Good Time is very good in what they're doing...",
      aosDuration: 600
    }
  ];

  pricingSlides = [
    {
      price: 129,
      package: 'Weekly package',
      description: 'Subscription fee is $129.99 USD and automatically renews each year.',
      aosDuration: 600,
    },
    {
      price: 329,
      package: 'Monthly package',
      description: 'Subscription fee is $129.99 USD and automatically renews each year.',
      aosDuration: 600,
    },
    {
      price: 629,
      package: 'Yearly package',
      description: 'Subscription fee is $129.99 USD and automatically renews each year.',
      aosDuration: 600,
    },
  ];

  features = [
    {
      icon: 'assets/images/icons/about-features-two-icon1.svg',
      title: 'Comprehensive Education',
      description: 'Web hosting provides everything idea...',
      aosDuration: 600
    },
    {
      icon: 'assets/images/icons/about-features-two-icon2.svg',
      title: 'User-friendly Interface',
      description: 'Web hosting provides everything idea...',
      aosDuration: 800
    },
    {
      icon: 'assets/images/icons/about-features-two-icon3.svg',
      title: 'Bookkeeping & Cash Flow',
      description: 'Web hosting provides everything idea...',
      aosDuration: 1000
    },
    {
      icon: 'assets/images/icons/about-features-two-icon4.svg',
      title: 'Customized reminder alerts',
      description: 'Web hosting provides everything idea...',
      aosDuration: 1200
    }
  ];

  // Counter values
  clientsCount1 = 0;
  percentageCount = 0;
  clientsCount2 = 0;

  constructor(
    private animationService: AnimationService,
    private counterService: CounterService
  ) { }
  ngAfterViewInit(): void {
    this.animationService.initAnimations();
    
    // Initialize counters after a short delay to ensure ViewChild elements are ready
    setTimeout(() => {
      this.initCounters();
    }, 100);
    new Swiper(this.brandSlider.nativeElement, {
      modules: [Navigation],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1500,
      grabCursor: true,
      loop: true,
      slidesPerView: 7,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
      },
    });

    new Swiper(this.testimonialSlider.nativeElement, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".testimonials-five-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper(this.pricingSlider.nativeElement, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".pricing-five-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
  }

  // Initialize counter animations
  initCounters(): void {
    ;
    
    // Clients counter 1 (282+) - Slower animation with delay
    if (this.clientsCounter1 && this.clientsCounter1.nativeElement) {
      ;
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.clientsCounter1.nativeElement,
          0,
          282,
          3000, // 3 seconds
          (value) => { this.clientsCount1 = value; },
          '+'
        );
      }, 200); // 200ms delay
    } else {
      ;
    }

    // Percentage counter (95%) - Slower animation with delay
    if (this.percentageCounter && this.percentageCounter.nativeElement) {
      ;
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.percentageCounter.nativeElement,
          0,
          95,
          3000, // 3 seconds
          (value) => { this.percentageCount = value; },
          '%'
        );
      }, 400); // 400ms delay
    } else {
      ;
    }

    // Clients counter 2 (282+) - Slower animation with delay
    if (this.clientsCounter2 && this.clientsCounter2.nativeElement) {
      ;
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.clientsCounter2.nativeElement,
          0,
          282,
          3000, // 3 seconds
          (value) => { this.clientsCount2 = value; },
          '+'
        );
      }, 600); // 600ms delay
    } else {
      ;
    }
  }

  // Format counter values for display
  formatCounterValue(value: number, suffix: string): string {
    if (suffix === '+') {
      return Math.round(value).toLocaleString() + '+';
    } else if (suffix === '%') {
      return Math.round(value) + '%';
    }
    return Math.round(value).toString();
  }

  // Test counter animation manually
  testCounters(): void {
    ;
    
    // Test clients counter 1
    this.counterService.animateCounter(
      0,
      282,
      3000,
      (value) => { this.clientsCount1 = value; },
      '+'
    );
    
    // Test percentage counter
    this.counterService.animateCounter(
      0,
      95,
      3000,
      (value) => { this.percentageCount = value; },
      '%'
    );
    
    // Test clients counter 2
    this.counterService.animateCounter(
      0,
      282,
      3000,
      (value) => { this.clientsCount2 = value; },
      '+'
    );
  }
}