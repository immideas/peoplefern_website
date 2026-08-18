import { AfterViewInit, Component, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Navigation } from 'swiper/modules';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-index-6',
  imports: [RouterLink, CommonModule],
  templateUrl: './index-6.html',
  styleUrl: './index-6.css'
})
export class Index6 implements AfterViewInit {
  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;
    @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef;

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

  steps = [
    {
      number: 1,
      title: 'Create Account',
      description:
        "Chatsonic understands voice commands and responds just like Siri / Google Assistant.",
      arrowImage: 'assets/images/shapes/curve-arrow-six.png',
      icon: 'assets/images/icons/how-it-works-six-icon1.png',
      duration: 800,
      delay: 100,
    },
    {
      number: 2,
      title: 'Connect Your Bank',
      description:
        "Chatsonic understands voice commands and responds just like Siri / Google Assistant.",
      arrowImage: 'assets/images/shapes/curve-arrow-six.png',
      icon: 'assets/images/icons/how-it-works-six-icon2.png',
      duration: 800,
      delay: 200,
    },
    {
      number: 3,
      title: 'Accepting Payments',
      description:
        "Chatsonic understands voice commands and responds just like Siri / Google Assistant.",
      arrowImage: 'assets/images/shapes/curve-arrow-six.png',
      icon: 'assets/images/icons/how-it-works-six-icon3.png',
      duration: 800,
      delay: 300,
    },
  ];

  services = [
    {
      icon: 'assets/images/icons/service-six-icon1.png',
      title: 'Real-Time Dashboard',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 100,
    },
    {
      icon: 'assets/images/icons/service-six-icon2.png',
      title: 'Recurring Billing',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 200,
    },
    {
      icon: 'assets/images/icons/service-six-icon3.png',
      title: 'Multi-Currency Support',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 300,
    },
    {
      icon: 'assets/images/icons/service-six-icon4.png',
      title: 'Refunds & Disputes',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 100,
    },
    {
      icon: 'assets/images/icons/service-six-icon5.png',
      title: 'Payment Links & QR Code',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 200,
    },
    {
      icon: 'assets/images/icons/service-six-icon6.png',
      title: 'Instant Notifications',
      description:
        'Optimize tracking across platforms & product lines using multiple.',
      duration: 800,
      delay: 300,
    },
  ];

  testimonials = [
    {
      name: 'Robert J. Hare/',
      designation: 'Graphics Designer',
      feedback:
        'Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger. Elevating your optimizing Business Growth.'
    },
    {
      name: 'Robiul Hasan /',
      designation: 'Front End Developer',
      feedback:
        'Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger. Elevating your optimizing Business Growth.'
    },
    {
      name: 'Mehedi Mohammad',
      designation: 'UX/UI Designer',
      feedback:
        'Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger. Elevating your optimizing Business Growth.'
    },
    {
      name: 'Robert J. Hare/',
      designation: 'Graphics Designer',
      feedback:
        'Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger. Elevating your optimizing Business Growth.'
    }
  ];

  stars = [1, 2, 3, 4, 5];

  faqs = [
    {
      question: 'How does GoDaddy help small business owners succeed?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    },
    {
      question: 'Why do I need a website for my business?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    },
    {
      question: 'Why do I need a professional email?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    },
    {
      question: 'What makes GoDaddy Web Hosting the world leader?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    },
    {
      question: 'Why choose GoDaddy for WordPress?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    },
    {
      question: 'Why should I transfer my domain or hosting to GoDaddy?',
      answer:
        'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast.'
    }
  ];

  paymentMethodRow1 = [
    { src: 'assets/images/thumbs/payment-method-img1.png', delay: '100' },
    { src: 'assets/images/thumbs/payment-method-img2.png', delay: '200' },
    { src: 'assets/images/thumbs/payment-method-img3.png', delay: '300' }
  ];

  paymentMethodRow2 = [
    { src: 'assets/images/thumbs/payment-method-img4.png', delay: '100' },
    { src: 'assets/images/thumbs/payment-method-img5.png', delay: '200' },
    { src: 'assets/images/thumbs/payment-method-img6.png', delay: '300' }
  ];

  pricingPlans = [
    {
      name: 'Personal Plan',
      description: 'Customized anything in anytime',
      price: '$1.99',
      billingCycle: '/Yearly',
      buttonText: 'Start Free Trial',
      renewsAt: 'Renews at $9.88/month',
      titleDelay: '100',
      descDelay: '200',
      priceDelay: '300',
      buttonDelay: '100',
      features: [
        { text: 'Real-time tracking notifications', delay: '100' },
        { text: 'Real-time analytics', delay: '100' },
        { text: 'Drag and drop templates', delay: '100' },
        { text: 'Project Management', delay: '100' },
        { text: '24/7 email and chat support', delay: '100' }
      ]
    },
    {
      name: 'Business Plan',
      description: 'Advanced features for growing businesses',
      price: '$4.99',
      billingCycle: '/Yearly',
      buttonText: 'Start Business Trial',
      renewsAt: 'Renews at $24.88/month',
      titleDelay: '150',
      descDelay: '250',
      priceDelay: '350',
      buttonDelay: '150',
      features: [
        { text: 'Priority support', delay: '150' },
        { text: 'Enhanced analytics', delay: '150' },
        { text: 'Custom templates', delay: '150' },
        { text: 'Team management', delay: '150' },
        { text: 'Dedicated account manager', delay: '150' }
      ]
    },
    {
      name: 'Enterprise Plan',
      description: 'Full suite for enterprise-level needs',
      price: '$9.99',
      billingCycle: '/Yearly',
      buttonText: 'Start Enterprise Trial',
      renewsAt: 'Renews at $49.88/month',
      titleDelay: '200',
      descDelay: '300',
      priceDelay: '400',
      buttonDelay: '200',
      features: [
        { text: '24/7 dedicated support', delay: '200' },
        { text: 'Advanced security features', delay: '200' },
        { text: 'Personalized onboarding', delay: '200' },
        { text: 'Unlimited users', delay: '200' },
        { text: 'Custom integrations', delay: '200' }
      ]
    }
  ];

  items = [
    {
      collapseId: 'collapseTwo',
      title: 'Choose Payment Method',
      content:
        'It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.',
      open: false,
    },
    {
      collapseId: 'collapseThree',
      title: 'Enter Payment Details',
      content:
        'It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.',
      open: true, // this one matches your original which had `show`
    },
    {
      collapseId: 'collapseFour',
      title: 'Confirm & Complete',
      content:
        'It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.',
      open: false,
    },
  ];

  constructor(
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }



  ngAfterViewInit(): void {
    this.animationService.initAnimations();
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
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          centeredSlides: false,
          slidesPerView: 1,
        },
        768: {
          centeredSlides: true,
          slidesPerView: 2,
        },
      },
    });

    // Initialize GSAP button effects after view is rendered
    if (isPlatformBrowser(this.platformId) && typeof window.initCustomGSAP === 'function') {
      window.initCustomGSAP();
    }
  }
}