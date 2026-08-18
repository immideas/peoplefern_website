import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class Index implements AfterViewInit {
  constructor(
    private animationService: AnimationService,
    private counterService: CounterService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;
  @ViewChild('showCaseSlider', { static: false }) showCaseSlider!: ElementRef;
  @ViewChild('topFeaturesSlider', { static: true }) slider!: ElementRef;

  // Counter element references
  @ViewChild('clientCounter', { static: false }) clientCounter!: ElementRef;
  @ViewChild('reviewCounter', { static: false }) reviewCounter!: ElementRef;
  @ViewChild('speedCounter', { static: false }) speedCounter!: ElementRef;
  @ViewChild('growthCounter', { static: false }) growthCounter!: ElementRef;
  @ViewChild('reviewPercentCounter', { static: false }) reviewPercentCounter!: ElementRef;
  @ViewChild('revenueCounter', { static: false }) revenueCounter!: ElementRef;

  // Counter values
  clientCount = 0;
  reviewCount = 0;
  speedMultiplier = 0;
  growthPercentage = 0;
  reviewPercentage = 0;
  revenueGrowth = 0;

  // Accordion data
  faqItems = [
    {
      id: 'collapseTwo',
      title: 'Tailored solution',
      content: 'We customize our technology to fit your specific need ensuring the best possible outcomes.',
      image: 'assets/images/thumbs/faq-thumb2.png',
      expanded: false
    },
    {
      id: 'collapseOne',
      title: 'Cutting-edge technology',
      content: 'We customize our technology to fit your specific need ensuring the best possible outcomes.',
      image: 'assets/images/thumbs/faq-thumb1.png',
      expanded: true
    },
    {
      id: 'collapseThree',
      title: 'Discovery & Analysis',
      content: 'We customize our technology to fit your specific need ensuring the best possible outcomes.',
      image: 'assets/images/thumbs/faq-thumb3.png',
      expanded: false
    },
    {
      id: 'collapseFour',
      title: 'Deployment & Support',
      content: 'We customize our technology to fit your specific need ensuring the best possible outcomes.',
      image: 'assets/images/thumbs/faq-thumb4.png',
      expanded: false
    }
  ];

  currentFaqImage = 'assets/images/thumbs/faq-thumb1.png';

  topFeatures = [
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Perfect solution for success' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Excellence in tailored IT Services' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Elevate your brand sasstech' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Achieve business goals solution' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Innovation in every presence' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Perfect solution for success' },
    { icon: 'assets/images/icons/chart-icon.svg', title: 'Excellence in tailored IT Services' }
  ];

  brands = [
    { img: 'assets/images/thumbs/brand-img1.png', duration: 600 },
    { img: 'assets/images/thumbs/brand-img2.png', duration: 700 },
    { img: 'assets/images/thumbs/brand-img3.png', duration: 800 },
    { img: 'assets/images/thumbs/brand-img4.png', duration: 600 },
    { img: 'assets/images/thumbs/brand-img5.png', duration: 700 },
    { img: 'assets/images/thumbs/brand-img6.png', duration: 800 },
    { img: 'assets/images/thumbs/brand-img7.png', duration: 600 },
    { img: 'assets/images/thumbs/brand-img3.png', duration: 700 }
  ];

  slides2 = [
    {
      img: 'assets/images/thumbs/show-case-img1.png',
      title: 'Mobile Application Development',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img2.png',
      title: 'Cloud Computing System',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img3.png',
      title: 'Mobile Application Development',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img4.png',
      title: 'Creative UI/UX Designing',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img3.png',
      title: 'Mobile Application Development',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img2.png',
      title: 'Cloud Computing System',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img1.png',
      title: 'Mobile Application Development',
      subtitle: 'Excellent Performance'
    },
    {
      img: 'assets/images/thumbs/show-case-img2.png',
      title: 'Cloud Computing System',
      subtitle: 'Excellent Performance'
    },
  ];


  clientImages = [
    { src: 'assets/images/thumbs/client-img1.png', alt: 'Client Image' },
    { src: 'assets/images/thumbs/client-img2.png', alt: 'Client Image' },
    { src: 'assets/images/thumbs/client-img3.png', alt: 'Client Image' }
  ];

  clientStats = {
    count: '2.3M+',
    reviews: '5000+ Client reviews'
  };


  roadmapSteps = [
    {
      number: '01',
      icon: 'assets/images/icons/roadmap-icon1.svg',
      title: 'Brainstorming',
      bgClass: 'bg-main-600',
      marginClass: 'tw-mt-705'
    },
    {
      number: '02',
      icon: 'assets/images/icons/roadmap-icon2.svg',
      title: 'UX <br> Research',
      bgClass: 'bg-dark-deep',
      marginClass: 'tw--mt-8-px'
    },
    {
      number: '03',
      icon: 'assets/images/icons/roadmap-icon3.svg',
      title: 'Product Designing',
      bgClass: 'bg-sky-deep',
      marginClass: 'tw-mt-505'
    },
    {
      number: '04',
      icon: 'assets/images/icons/roadmap-icon4.svg',
      title: 'Front-End Development',
      bgClass: 'bg-dark-deep',
      marginClass: 'tw--mt-28-px'
    },
    {
      number: '05',
      icon: 'assets/images/icons/roadmap-icon5.svg',
      title: 'Usability <br> Testing',
      bgClass: 'bg-dark-deep',
      marginClass: 'tw-mt-8'
    },
    {
      number: '06',
      icon: 'assets/images/icons/roadmap-icon6.svg',
      title: 'Back-End Development',
      bgClass: 'bg-pink',
      marginClass: 'tw--mt-8-px'
    },
    {
      number: '07',
      icon: 'assets/images/icons/roadmap-icon7.svg',
      title: 'SEO Optimization',
      bgClass: 'bg-main-600',
      marginClass: 'tw-mt-4'
    },
    {
      number: '08',
      icon: 'assets/images/icons/roadmap-icon8.svg',
      title: 'Digital Marketing',
      bgClass: 'bg-sky-deep',
      marginClass: 'tw--mt-28-px'
    }
  ];

  // Testimonials data
  testimonials = [
    {
      id: 1,
      mainImage: 'assets/images/thumbs/testimonials-img1.png',
      name: 'Webcly jhonson',
      title: 'Tung Phan -',
      position: 'Ceo and Founder',
      titleColor: 'text-neutral-600',
      description: '"SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we couldn\'t be prouder of that. elevating your optimizing Business Growth."',
      shortImage: 'assets/images/thumbs/testimonials-short-img1.png',
      isActive: false
    },
    {
      id: 2,
      mainImage: 'assets/images/thumbs/testimonials-img3.png',
      name: 'James anderson',
      title: 'CEO -',
      position: 'and Founder',
      titleColor: 'text-main-600',
      description: '"SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we couldn\'t be prouder of that. elevating your optimizing Business Growth."',
      shortImage: 'assets/images/thumbs/testimonials-short-img3.png',
      isActive: true
    },
    {
      id: 3,
      mainImage: 'assets/images/thumbs/testimonials-img2.png',
      name: 'John Doe',
      title: 'Developer -',
      position: 'Web Developer',
      titleColor: 'text-neutral-600',
      description: '"SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we couldn\'t be prouder of that. elevating your optimizing Business Growth."',
      shortImage: 'assets/images/thumbs/testimonials-short-img2.png',
      isActive: false
    }
  ];
  aboutFeatures = [
    {
      icon: 'assets/images/icons/about-icon1.svg',
      title: 'Innovation at our core',
      description: "In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.",
      aos: 'fade-up',
      aosAnchor: 'top-bottom',
      aosDuration: '600'
    },
    {
      icon: 'assets/images/icons/about-icon2.svg',
      title: 'Simplifying complexity',
      description: "In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.",
      aos: 'fade-up',
      aosAnchor: 'top-bottom',
      aosDuration: '600'
    },
    {
      icon: 'assets/images/icons/about-icon3.svg',
      title: 'Empowering growth.',
      description: "In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.",
      aos: 'fade-up',
      aosAnchor: 'top-bottom',
      aosDuration: '600'
    }
  ];

  aboutTags = [
    { text: "Cybersecurity", class: "tw-px-9 tw-py-1 fw-semibold text-white bg-main-two-600 rounded-pill" },
    { text: "Infrastructure Management", class: "tw-px-4 tw-py-1 fw-semibold text-white bg-pink rounded-pill" },
    { text: "Operational Excellence", class: "tw-px-9 tw-py-1 fw-semibold text-white bg-main-600 rounded-pill" }
  ];
  features = [
    { icon: 'fa fa-chart-line', title: 'Achieve business goals solution' },
    { icon: 'fa fa-lightbulb', title: 'Innovation in every presence' },
    { icon: 'fa fa-check-circle', title: 'Perfect solution for success' },
    { icon: 'fa fa-award', title: 'Excellence in tailored results' },
    { icon: 'fa fa-award', title: 'Excellence in tailored results' },
    { icon: 'fa fa-award', title: 'Excellence in tailored results' },
    { icon: 'fa fa-award', title: 'Excellence in tailored results' },
    { icon: 'fa fa-award', title: 'Excellence in tailored results' }
  ];



  ngAfterViewInit(): void {
    this.animationService.initAnimations();
    this.startMarquee();

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

    new Swiper(this.showCaseSlider.nativeElement, {
      modules: [Navigation],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1500,
      grabCursor: true,
      loop: true,
      spaceBetween: 24,
      slidesPerView: 4,
      centeredSlides: true,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      },
    });
  }

  startMarquee(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sliderEl = this.slider.nativeElement as HTMLElement;
    const track = sliderEl.querySelector('.marquee-track') as HTMLElement;
    if (!track) return;

    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const duration = 24000; // 24s for full scroll
    const totalWidth = track.scrollWidth / 2; // because duplicated

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      let offset = (progress / duration) * totalWidth;
      if (offset > totalWidth) offset = offset - totalWidth;
      this.renderer.setStyle(track, 'transform', `translateX(${isRTL ? offset : -offset}px)`);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Pause on hover
    this.renderer.listen(sliderEl, 'mouseenter', () => {
      this.renderer.setStyle(track, 'animationPlayState', 'paused');
    });
    this.renderer.listen(sliderEl, 'mouseleave', () => {
      this.renderer.setStyle(track, 'animationPlayState', 'running');
    });
  }

  // Initialize counter animations
  initCounters(): void {

    // Client count animation (2.3M+) - Slower animation with delay
    if (this.clientCounter && this.clientCounter.nativeElement) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.clientCounter.nativeElement,
          0,
          2300000,
          4000, // 4 seconds
          (value) => { this.clientCount = value; },
          'M+'
        );
      }, 200); // 200ms delay
    } else {
      
    }

    // Review count animation (5000+) - Slower animation with delay
    if (this.reviewCounter) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.reviewCounter.nativeElement,
          0,
          5000,
          3500, // 3.5 seconds
          (value) => { this.reviewCount = value; },
          '+'
        );
      }, 400); // 400ms delay
    }

    // Speed multiplier animation (3x) - Slower animation with delay
    if (this.speedCounter) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.speedCounter.nativeElement,
          0,
          3,
          3000, // 3 seconds
          (value) => { this.speedMultiplier = value; },
          'x'
        );
      }, 600); // 600ms delay
    }

    // Growth percentage animation (50%) - Slower animation with delay
    if (this.growthCounter) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.growthCounter.nativeElement,
          0,
          50,
          4000, // 4 seconds
          (value) => { this.growthPercentage = value; },
          '%'
        );
      }, 800); // 800ms delay
    }

    // Review percentage animation (95%) - Slower animation with delay
    if (this.reviewPercentCounter) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.reviewPercentCounter.nativeElement,
          0,
          95,
          3500, // 3.5 seconds
          (value) => { this.reviewPercentage = value; },
          '%'
        );
      }, 1000); // 1000ms delay
    }

    // Revenue growth animation (1.3m) - Slower animation with delay
    if (this.revenueCounter) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.revenueCounter.nativeElement,
          0,
          1300000,
          4000, // 4 seconds
          (value) => { this.revenueGrowth = value; },
          'm'
        );
      }, 1200); // 1200ms delay
    }
  }

  // Format counter values for display
  formatCounterValue(value: number, suffix: string): string {
    if (suffix === 'M+') {
      return (value / 1000000).toFixed(1) + 'M+';
    } else if (suffix === '+') {
      return Math.round(value).toLocaleString() + '+';
    } else if (suffix === 'x') {
      return Math.round(value) + 'x';
    } else if (suffix === '%') {
      return Math.round(value) + '%';
    } else if (suffix === 'm') {
      return (value / 1000000).toFixed(1) + 'm';
    }
    return Math.round(value).toString();
  }

  // Testimonials functionality
  onTestimonialClick(testimonial: any): void {
    // Remove active class from all testimonials
    this.testimonials.forEach(t => t.isActive = false);

    // Add active class to clicked testimonial
    testimonial.isActive = true;
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

    // Update image with fade effect
    if (item.expanded) {
      this.currentFaqImage = item.image;
    }
  }

}

