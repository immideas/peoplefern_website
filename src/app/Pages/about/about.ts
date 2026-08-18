import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-about',
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {
  // Counter ViewChild references
  @ViewChild('counter1', { static: false }) counter1!: ElementRef;
  @ViewChild('counter2', { static: false }) counter2!: ElementRef;
  @ViewChild('counter3', { static: false }) counter3!: ElementRef;
  @ViewChild('counter4', { static: false }) counter4!: ElementRef;
  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;


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

     tags2 = [
  { label: 'Project management', textColor: 'text-white', bgClass: 'gradient-bg-six' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-paste' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
  { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-yellow' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-orange' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
  { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-orange' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
  { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-paste' },
  { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-pink' }
];

  images = [
    { src: 'assets/images/thumbs/about-banner-img1.png', extraClass: 'one' },
    { src: 'assets/images/thumbs/about-banner-img2.png', extraClass: 'animation-delay-3 two' },
    { src: 'assets/images/thumbs/about-banner-img3.png', extraClass: 'three' },
    { src: 'assets/images/thumbs/about-banner-img4.png', extraClass: 'animation-delay-3 four' },
    { src: 'assets/images/thumbs/about-banner-img5.png', extraClass: 'five' },
    { src: 'assets/images/thumbs/about-banner-img6.png', extraClass: 'animation-delay-3 six' },
    { src: 'assets/images/thumbs/about-banner-img7.png', extraClass: 'seven' },
    { src: 'assets/images/thumbs/about-banner-img8.png', extraClass: 'animation-delay-3 eight' },
    { src: 'assets/images/thumbs/about-banner-img9.png', extraClass: 'nine' },
    { src: 'assets/images/thumbs/about-banner-img10.png', extraClass: 'animation-delay-3 ten' },
    { src: 'assets/images/thumbs/about-banner-img11.png', extraClass: 'eleven' },
    { src: 'assets/images/thumbs/about-banner-img12.png', extraClass: 'animation-delay-3 twelve' },
  ];

  stats = [
    { value: '20', suffix: 'M', label: 'worldwide clients', duration: '600' },
    { value: '95', suffix: '%', label: 'worldwide clients', duration: '700' },
    { value: '3', suffix: 'x', label: 'worldwide clients', duration: '800' },
    { value: '99', suffix: 'k+', label: 'worldwide clients', duration: '900' },
  ];

  features = [
    {
      icon: 'assets/images/icons/about-features-icon1.svg',
      title: 'Comprehensive Education',
      description: 'Web hosting provides everything idea online. From where your',
      duration: '600'
    },
    {
      icon: 'assets/images/icons/about-features-icon2.svg',
      title: 'User-friendly Interface',
      description: 'Web hosting provides everything idea online. From where your',
      duration: '800'
    },
    {
      icon: 'assets/images/icons/about-features-icon3.svg',
      title: 'Bookkeeping & Cash Flow',
      description: 'Web hosting provides everything idea online. From where your',
      duration: '1000'
    },
    {
      icon: 'assets/images/icons/about-features-icon4.svg',
      title: 'Customized reminder alerts',
      description: 'Web hosting provides everything idea online. From where your',
      duration: '1200'
    }
  ];

  teamMembers = [
    {
      name: 'John Doe',
      role: 'creative director',
      img: 'assets/images/thumbs/about-team-img1.jpg',
      duration: '600',
      socials: [
        { link: 'https://www.facebook.com', icon: 'ph-fill ph-facebook-logo' },
        { link: 'https://www.twitter.com', icon: 'ph-fill ph-twitter-logo' },
        { link: 'https://www.instagram.com', icon: 'ph-fill ph-instagram-logo' },
        { link: 'https://www.pinterest.com', icon: 'ph-fill ph-pinterest-logo' }
      ]
    },
    {
      name: 'John Milton',
      role: 'creative director',
      img: 'assets/images/thumbs/about-team-img2.jpg',
      duration: '800',
      socials: [
        { link: 'https://www.facebook.com', icon: 'ph-fill ph-facebook-logo' },
        { link: 'https://www.twitter.com', icon: 'ph-fill ph-twitter-logo' },
        { link: 'https://www.instagram.com', icon: 'ph-fill ph-instagram-logo' },
        { link: 'https://www.pinterest.com', icon: 'ph-fill ph-pinterest-logo' }
      ]
    },
    {
      name: 'Robiul Hasan',
      role: 'creative director',
      img: 'assets/images/thumbs/about-team-img3.jpg',
      duration: '1000',
      socials: [
        { link: 'https://www.facebook.com', icon: 'ph-fill ph-facebook-logo' },
        { link: 'https://www.twitter.com', icon: 'ph-fill ph-twitter-logo' },
        { link: 'https://www.instagram.com', icon: 'ph-fill ph-instagram-logo' },
        { link: 'https://www.pinterest.com', icon: 'ph-fill ph-pinterest-logo' }
      ]
    },
    {
      name: 'John Smith',
      role: 'creative director',
      img: 'assets/images/thumbs/about-team-img4.jpg',
      duration: '1200',
      socials: [
        { link: 'https://www.facebook.com', icon: 'ph-fill ph-facebook-logo' },
        { link: 'https://www.twitter.com', icon: 'ph-fill ph-twitter-logo' },
        { link: 'https://www.instagram.com', icon: 'ph-fill ph-instagram-logo' },
        { link: 'https://www.pinterest.com', icon: 'ph-fill ph-pinterest-logo' }
      ]
    }
  ];

  testimonials = [
    {
      name: 'Webcly jhonson',
      img: 'assets/images/thumbs/testimonials-img1.png',
      shortImg: 'assets/images/thumbs/testimonials-short-img1.png',
      rolePrefix: 'Tung Phan -',
      roleSuffix: 'Ceo and Founder',
      roleClass: 'text-neutral-600',
      feedback:
        '“SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we could not be prouder of that. elevating your optimizing Business Growth.”',
      active: false,
    },
    {
      name: 'James anderson',
      img: 'assets/images/thumbs/testimonials-img3.png',
      shortImg: 'assets/images/thumbs/testimonials-short-img3.png',
      rolePrefix: 'CEO -',
      roleSuffix: 'and Founder',
      roleClass: 'text-main-600',
      feedback:
        '“SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we could not be prouder of that. elevating your optimizing Business Growth.”',
      active: true,
    },
    {
      name: 'John Doe',
      img: 'assets/images/thumbs/testimonials-img2.png',
      shortImg: 'assets/images/thumbs/testimonials-short-img2.png',
      rolePrefix: 'Developer -',
      roleSuffix: 'Web Developer',
      roleClass: 'text-neutral-600',
      feedback:
        '“SassTech hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we could not be prouder of that. elevating your optimizing Business Growth.”',
      active: false,
    },
  ];

   pricingPlans = [
    {
      title: 'Basic plan',
      subtitle: 'Customized anything in anytime',
      price: '$1.99',
      billing: '/Yearly',
      renew: 'Renews at $9.88/month',
      duration: '600',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support'
      ]
    },
    {
      title: 'Premium plan',
      subtitle: 'Customized anything in anytime',
      price: '$9.99',
      billing: '/Yearly',
      renew: 'Renews at $9.88/month',
      duration: '800',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support'
      ]
    },
    {
      title: 'Pro plan',
      subtitle: 'Customized anything in anytime',
      price: '$19.99',
      billing: '/Yearly',
      renew: 'Renews at $9.88/month',
      duration: '900',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support'
      ]
    }
  ];

  // Counter values
  counterValue1 = 0; // 20M
  counterValue2 = 0; // 95%
  counterValue3 = 0; // 3x
  counterValue4 = 0; // 99k+

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
  }

  // Initialize counter animations
  initCounters(): void {
    ;
    
    // Counter 1 (20M) - Slower animation with delay
    if (this.counter1 && this.counter1.nativeElement) {
      
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.counter1.nativeElement,
          0,
          20,
          3000, // 3 seconds
          (value) => { this.counterValue1 = value; },
          'M'
        );
      }, 200); // 200ms delay
    } 

    // Counter 2 (95%) - Slower animation with delay
    if (this.counter2 && this.counter2.nativeElement) {
      
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.counter2.nativeElement,
          0,
          95,
          3000, // 3 seconds
          (value) => { this.counterValue2 = value; },
          '%'
        );
      }, 400); // 400ms delay
    } 

    // Counter 3 (3x) - Slower animation with delay
    if (this.counter3 && this.counter3.nativeElement) {
      
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.counter3.nativeElement,
          0,
          3,
          3000, // 3 seconds
          (value) => { this.counterValue3 = value; },
          'x'
        );
      }, 600); // 600ms delay
    } 

    // Counter 3 (3x) - Slower animation with delay
    if (this.counter4 && this.counter4.nativeElement) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.counter4.nativeElement,
          0,
          300,
          3000, // 3 seconds
          (value) => { this.counterValue4 = value; },
          '+'
        );
      }, 600); // 600ms delay
    } 
  }

  // Format counter values for display
  formatCounterValue(value: number, suffix: string): string {
    if (suffix === 'M') {
      return Math.round(value) + 'M';
    } else if (suffix === '%') {
      return Math.round(value) + '%';
    } else if (suffix === 'x') {
      return Math.round(value) + 'x';
    } else if (suffix === 'k+') {
      return Math.round(value) + 'k+';
    }
    return Math.round(value).toString();
  }

  // Testimonials functionality
  onTestimonialClick(testimonial: any): void {
    // Remove active class from all testimonials
    this.testimonials.forEach(t => t.active = false);
    
    // Add active class to clicked testimonial
    testimonial.active = true;
  }

}
