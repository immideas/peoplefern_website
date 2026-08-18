import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-index-4',
  imports: [RouterLink, CommonModule],
  templateUrl: './index-4.html',
  styleUrl: './index-4.css'
})
export class Index4 implements AfterViewInit {

  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;
  @ViewChild('testimonialsSlider', { static: false }) testimonialsSlider!: ElementRef;
  
  // Counter ViewChild references
  @ViewChild('integrationCounter', { static: false }) integrationCounter!: ElementRef;
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
  features = [
    {
      aosDuration: 1000,
      title: 'Lead & Contact Management',
      titleClass: 'max-w-250-px',
      paragraph: 'Sassly-CRM in the past allowing you to',
      link: 'Transfer domain',
      image1: 'assets/images/thumbs/features-four-thumb101.png',
      image1Class: 'max-w-40-percent position-absolute top-0 tw-mt-5 tw-end-0 tw-me-5 common-shadow-twentyFive tw-rounded-2xl d-xl-block d-none',
      image2: 'assets/images/thumbs/features-four-thumb102.png',
      image2Class: 'max-w-40-percent position-absolute bottom-0 tw-start-45 tw-me-5 common-shadow-twentyFive tw-rounded-2xl'
    },
    {
      aosDuration: 1200,
      title: 'Automate Workflows and Monitor your Sales.',
      titleClass: 'max-w-400-px',
      paragraph: 'Sassly-CRM in the past allowing you to',
      link: 'Transfer domain',
      image1: 'assets/images/thumbs/features-four-thumb2.png',
      image1Class: 'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
    },
    {
      aosDuration: 1000,
      title: 'Artificial Intelligence',
      titleClass: 'max-w-400-px',
      paragraph: 'Sassly-CRM in the past allowing you to',
      link: 'Transfer domain',
      image1: 'assets/images/thumbs/features-four-thumb3.png',
      image1Class: 'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-10 tw-rounded-2xl'
    },
    {
      aosDuration: 1200,
      title: 'involves organizing, tracking, and optimizing sales',
      titleClass: 'max-w-432-px',
      paragraph: 'Sassly-CRM in the past allowing you to',
      link: 'Transfer domain',
      image1: 'assets/images/thumbs/features-four-thumb4.png',
      image1Class: 'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
    }
  ];

  slides2 = [
    {
      logo: 'assets/images/thumbs/website-owner-img1.png',
      text: '“Sasstech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we couldn\'t be prouder of that.”',
      userImg: 'assets/images/thumbs/testimonials-short-img1.png',
      name: 'Robiul Hasan',
      designation: 'CEO',
      subtitle: 'and Founder',
      rating: 'assets/images/icons/ratings.svg'
    },
    {
      logo: 'assets/images/thumbs/website-owner-img2.png',
      text: '“Sasstech hires great people from a wide range of backgrounds, which simply strengthens our company, and we couldn\'t be prouder of that,” the company says.',
      userImg: 'assets/images/thumbs/testimonials-short-img2.png',
      name: 'John Doe',
      designation: 'CEO',
      subtitle: 'and Founder',
      rating: 'assets/images/icons/ratings.svg'
    },
    {
      logo: 'assets/images/thumbs/website-owner-img3.png',
      text: '"Sasstech brings together talented individuals from diverse backgrounds, strengthening our company in the best way possible.',
      userImg: 'assets/images/thumbs/testimonials-short-img3.png',
      name: 'James anderson',
      designation: 'CEO',
      subtitle: 'and Founder',
      rating: 'assets/images/icons/ratings.svg'
    }
  ];

  tabs = [
    { id: 'pills-data', label: 'data', active: true },
    { id: 'pills-Automation', label: 'Automation', active: false },
    { id: 'pills-Pipeline', label: 'Pipeline', active: false },
    { id: 'pills-Productivity', label: 'Productivity', active: false },
    { id: 'pills-Reporting', label: 'Reporting', active: false }
  ];

  // Counter values
  integrationCount = 0;
  clientsCount1 = 0;
  percentageCount = 0;
  clientsCount2 = 0;

  // Accordion data
  faqItems = [
    {
      id: 'collapseTwo',
      title: 'Automate everything',
      content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
      expanded: false
    },
    {
      id: 'collapseOne',
      title: 'Deploy AI',
      content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
      expanded: true
    },
    {
      id: 'collapseThree',
      title: 'Powerful reporting',
      content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
      expanded: false
    }
  ];

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
    
    // Also test counters immediately for debugging
    setTimeout(() => {
      this.testCounters();
    }, 2000);

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

    new Swiper(this.testimonialsSlider.nativeElement, {
      modules: [Navigation],
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      effect: "fade",
      speed: 500,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      navigation: {
        // ✅ Add navigation settings
        nextEl: "#testimonials-four-next",
        prevEl: "#testimonials-four-prev",
      },
    });
  }

  // Initialize counter animations
  initCounters(): void {
    ;
    
    // Integration counter (2k+) - Slower animation with delay
    if (this.integrationCounter && this.integrationCounter.nativeElement) {
      ;
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.integrationCounter.nativeElement,
          0,
          2000,
          3000, // 3 seconds
          (value) => { this.integrationCount = value; },
          'k+'
        );
      }, 200); // 200ms delay
    } else {
      ;
    }

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
      }, 400); // 400ms delay
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
      }, 600); // 600ms delay
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
      }, 800); // 800ms delay
    } else {
      ;
    }
  }

  // Format counter values for display
  formatCounterValue(value: number, suffix: string): string {
    if (suffix === 'k+') {
      return (value / 1000).toFixed(0) + 'k+';
    } else if (suffix === '+') {
      return Math.round(value).toLocaleString() + '+';
    } else if (suffix === '%') {
      return Math.round(value) + '%';
    }
    return Math.round(value).toString();
  }

  // Accordion toggle method
  toggleAccordion(item: any): void {
    // Close all other items
    this.faqItems.forEach(faq => {
      if (faq.id !== item.id) {
        faq.expanded = false;
      }
    });
    
    // Toggle current item
    item.expanded = !item.expanded;
  }

  // Test counter animation manually
  testCounters(): void {
    ;
    
    // Test integration counter
    this.counterService.animateCounter(
      0,
      2,
      3000,
      (value) => { this.integrationCount = value; },
      'k+'
    );
    
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
