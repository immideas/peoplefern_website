import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-index-2',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './index-2.html',
  styleUrl: './index-2.css'
})
export class Index2 implements OnInit, AfterViewInit {
  @ViewChild('hostingPlanSlider', { static: false }) hostingPlanSlider!: ElementRef;
  @ViewChild('serviceSlider', { static: false }) serviceSlider!: ElementRef;
  @ViewChild('aboutSliderOne', { static: false }) aboutSliderOne!: ElementRef;
  @ViewChild('aboutSliderTwo', { static: false }) aboutSliderTwo!: ElementRef;

  // Background image data
  backgroundImages = [
    {
      element: 'aboutTwoBackground',
      imageUrl: 'assets/images/thumbs/about-two-img-bg.png'
    }
  ];

  // Domain selection state
  selectedDomain: string = '.com';
  domainName: string = '';

  // Tab state management for animated backgrounds
  activeTab1: string = 'FindNewDomain';
  activeTab2: string = 'Monthly';

  // Domain options
  domainOptions = [
    { value: '.com', label: '.com' },
    { value: '.cloud', label: '.cloud' },
    { value: '.shop', label: '.shop' },
    { value: '.online', label: '.online' },
    { value: '.info', label: '.info' }
  ];

  // Domain items data
  domainItems = [
    {
      domain: '.com',
      image: 'assets/images/thumbs/domain-img1.png',
      alt: 'Domain Logo',
      startingPrice: 'Starting price',
      price: '$13.34/Yearly',
      isActive: true
    },
    {
      domain: '.cloud',
      image: 'assets/images/thumbs/domain-img2.png',
      alt: 'Domain Logo',
      startingPrice: 'Starting price',
      price: '$14.34/Yearly',
      isActive: false
    },
    {
      domain: '.shop',
      image: 'assets/images/thumbs/domain-img3.png',
      alt: 'Domain Logo',
      startingPrice: 'Starting price',
      price: '$13.34/Yearly',
      isActive: false
    },
    {
      domain: '.online',
      image: 'assets/images/thumbs/domain-img4.png',
      alt: 'Domain Logo',
      startingPrice: 'Starting price',
      price: '$13.34/Yearly',
      isActive: false
    },
    {
      domain: '.info',
      image: 'assets/images/thumbs/domain-img5.png',
      alt: 'Domain Logo',
      startingPrice: 'Starting price',
      price: '$13.34/Yearly',
      isActive: false
    }
  ];

  aboutTwoSlides = [
    { src: 'assets/images/thumbs/about-slide-img1.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img2.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img3.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img1.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img2.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img1.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img2.png', alt: 'Image' },
    { src: 'assets/images/thumbs/about-slide-img3.png', alt: 'Image' }
  ];

  plans = [
    {
      icon: 'assets/images/icons/hosting-plan-icon1.png',
      priceText: 'Starts at',
      price: '$3.75/mo*',
      title: 'Web hosting',
      description: 'Easy, affordable, and includes a free domain for a year. Score!',
      aosDuration: 600
    },
    {
      icon: 'assets/images/icons/hosting-plan-icon2.png',
      priceText: 'Starts at',
      price: '$3.75/mo*',
      title: 'WordPress hosting',
      description: 'Easy, affordable, and includes a free domain for a year. Score!',
      aosDuration: 700
    },
    {
      icon: 'assets/images/icons/hosting-plan-icon3.png',
      priceText: 'Starts at',
      price: '$3.75/mo*',
      title: 'VPS hosting',
      description: 'Easy, affordable, and includes a free domain for a year. Score!',
      aosDuration: 800
    },
    {
      icon: 'assets/images/icons/hosting-plan-icon4.png',
      priceText: 'Starts at',
      price: '$3.75/mo*',
      title: 'Dedicated hosting',
      description: 'Easy, affordable, and includes a free domain for a year. Score!',
      aosDuration: 900
    },
    {
      icon: 'assets/images/icons/hosting-plan-icon2.png',
      priceText: 'Starts at',
      price: '$3.75/mo*',
      title: 'WordPress hosting',
      description: 'Easy, affordable, and includes a free domain for a year. Score!',
      aosDuration: 1000
    }
  ];

  slides = [
    {
      icon: 'assets/images/icons/service-icon1.svg',
      title: 'Local data centers. Around the world.',
      subtitle: 'Easy Invoicing',
      description: 'Web hosting provides everything you idea online. From where your website',
      aosDuration: 600
    },
    {
      icon: 'assets/images/icons/service-icon2.svg',
      title: 'Full speed ahead. Whatever the traffic.',
      subtitle: 'Easy Invoicing',
      description: 'Web hosting provides everything you idea online. From where your website',
      aosDuration: 700
    },
    {
      icon: 'assets/images/icons/service-icon3.svg',
      title: 'Live and kicking. 24/7.',
      subtitle: 'Easy Invoicing',
      description: 'Web hosting provides everything you idea online. From where your website',
      aosDuration: 800
    },
    {
      icon: 'assets/images/icons/service-icon4.svg',
      title: 'Website migration. Made simple.',
      subtitle: 'Easy Invoicing',
      description: 'Web hosting provides everything you idea online. From where your website',
      aosDuration: 900
    },
    {
      icon: 'assets/images/icons/service-icon3.svg',
      title: 'Live and kicking. 24/7.',
      subtitle: 'Easy Invoicing',
      description: 'Web hosting provides everything you idea online. From where your website',
      aosDuration: 1000
    }
  ];

  testimonials = [
    {
      img: 'assets/images/thumbs/website-owner-img1.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our co-sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    },
    {
      img: 'assets/images/thumbs/website-owner-img2.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our co`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    },
    {
      img: 'assets/images/thumbs/website-owner-img3.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our co-founders are very happy.`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    },
    {
      img: 'assets/images/thumbs/website-owner-img4.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our co-sales founders are very happy. We get absolutely raving reviews from our`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    },
    {
      img: 'assets/images/thumbs/website-owner-img5.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our co-sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    },
    {
      img: 'assets/images/thumbs/website-owner-img6.png',
      text: `We get absolutely raving reviews from our sales and customer support teams using close. Even our compa`,
      name: 'Rudra Ghosh',
      role: 'Founder & CEO',
      company: 'Dulalix',
      rating: 4.9
    }
  ];

  items = [
    {
      id: 'collapseTwo',
      ariaExpanded: 'false',
      headerText: 'How does GoDaddy help small business owners succeed?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    },
    {
      id: 'collapseOne',
      ariaExpanded: 'true',
      headerText: 'Why do I need a website for my business?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    },
    {
      id: 'collapseThree',
      ariaExpanded: 'false',
      headerText: 'Why do I need a professional email?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    },
    {
      id: 'collapseFour',
      ariaExpanded: 'false',
      headerText: 'What makes GoDaddy Web Hosting the world leader?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    },
    {
      id: 'collapseFive',
      ariaExpanded: 'false',
      headerText: 'Why choose GoDaddy for WordPress?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    },
    {
      id: 'collapseSix',
      ariaExpanded: 'false',
      headerText: 'Why should I transfer my domain, website or web hosting to GoDaddy?',
      bodyText: `GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional`
    }
  ];

  aboutTwoFeatures = [
    {
      icon: 'ph-bold ph-magnifying-glass',
      label: 'Domain',
      link: '/pricing-plan',
      extra: ''
    },
    {
      icon: 'ph-bold ph-dresser',
      label: 'Web Hosting ₹ 79.00/mo',
      link: '/pricing-plan',
      extra: ''
    },
    {
      icon: 'ph-bold ph-certificate',
      label: 'SSL Certificates',
      link: '/pricing-plan',
      extra: ''
    },
    {
      icon: 'ph-bold ph-envelope',
      label: 'Professional Email',
      link: '/pricing-plan',
      extra: ''
    }
  ];

  domainButtons = [
    {
      domain: '.com',
      img: 'assets/images/thumbs/domain-img1.png',
      price: '$13.34/Yearly'
    },
    {
      domain: '.cloud',
      img: 'assets/images/thumbs/domain-img2.png',
      price: '$14.34/Yearly'
    },
    {
      domain: '.shop',
      img: 'assets/images/thumbs/domain-img3.png',
      price: '$13.34/Yearly'
    },
    {
      domain: '.online',
      img: 'assets/images/thumbs/domain-img4.png',
      price: '$13.34/Yearly'
    },
    {
      domain: '.info',
      img: 'assets/images/thumbs/domain-img5.png',
      price: '$13.34/Yearly'
    }
  ];

  monthlyPlans = [
    {
      id: 1,
      discount: '85% OFF',
      planName: 'Basic plan',
      price: '1.99',
      duration: '/Monthly',
      renewPrice: '$9.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '600'
    },
    {
      id: 2,
      discount: '85% OFF',
      planName: 'Premium plan',
      price: '10.99',
      duration: '/Monthly',
      renewPrice: '$9.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '700'
    },
    {
      id: 3,
      discount: '85% OFF',
      planName: 'Pro plan',
      price: '20.99',
      duration: '/Monthly',
      renewPrice: '$9.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '800'
    }
  ];

  // Annually plans with expand functionality
  annuallyPlans = [
    {
      id: 4,
      discount: '85% OFF',
      planName: 'Basic plan',
      price: '19.90',
      duration: '/Yearly',
      renewPrice: '$9.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '600'
    },
    {
      id: 5,
      discount: '85% OFF',
      planName: 'Premium plan',
      price: '29.90',
      duration: '/Yearly',
      renewPrice: '$19.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '700'
    },
    {
      id: 6,
      discount: '85% OFF',
      planName: 'Pro plan',
      price: '39.90',
      duration: '/Yearly',
      renewPrice: '$29.88',
      monthsFree: '+2 months free',
      isExpanded: false,
      featureIcons: [
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg',
        'assets/images/icons/pricing-icon4.svg',
        'assets/images/icons/pricing-icon5.svg',
        'assets/images/icons/pricing-icon6.svg',
        'assets/images/icons/pricing-icon7.svg',
        'assets/images/icons/pricing-icon1.svg',
        'assets/images/icons/pricing-icon2.svg',
        'assets/images/icons/pricing-icon3.svg'
      ],
      featureLabels: [
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer',
        'Unmetered bandwidth',
        'Free SSL certificate',
        'Free domain included',
        'Unlimited free SSL',
        'Single website',
        'One-click WordPress installs',
        'Free WordPress website transfer'
      ],
      aosDuration: '800'
    }
  ];



  @ViewChild('pillsTab', { static: false }) pillsTabRef!: ElementRef;
  @ViewChild('pillsTabTwo', { static: false }) pillsTabTwoRef!: ElementRef;

  constructor(
    private animationService: AnimationService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.setupBackgroundImages();
  }

  // Setup background images for elements with background-img class
  private setupBackgroundImages(): void {
    // Note: Background images are now set via template binding or CSS classes
    // This method is kept for compatibility but can be removed if not needed
  }

  // Toggle expand state for monthly plans
  toggleMonthlyPlan(planId: number) {
    const plan = this.monthlyPlans.find(p => p.id === planId);
    if (plan) {
      plan.isExpanded = !plan.isExpanded;
    }
  }

  // Toggle expand state for annually plans
  toggleAnnuallyPlan(planId: number) {
    const plan = this.annuallyPlans.find(p => p.id === planId);
    if (plan) {
      plan.isExpanded = !plan.isExpanded;
    }
  }

  // Get button text based on expand state
  getButtonText(isExpanded: boolean): string {
    return isExpanded ? 'Less features' : 'See all features';
  }

  // Get button icon based on expand state
  getButtonIcon(isExpanded: boolean): string {
    return isExpanded ? 'ph-bold ph-caret-up' : 'ph-bold ph-caret-down';
  }

  // Toggle pricing between monthly and yearly for monthly plans
  toggleMonthlyPricing(planId: number) {
    const plan = this.monthlyPlans.find(p => p.id === planId);
    if (plan) {
      if (plan.duration === '/Monthly') {
        plan.duration = '/Yearly';
        plan.price = (parseFloat(plan.price) * 10).toFixed(2);
      } else if (plan.duration === '/Yearly') {
        plan.duration = '/Monthly';
        plan.price = (parseFloat(plan.price) / 10).toFixed(2);
      }
    }
  }

  // Toggle pricing between monthly and yearly for annually plans
  toggleAnnuallyPricing(planId: number) {
    const plan = this.annuallyPlans.find(p => p.id === planId);
    if (plan) {
      if (plan.duration === '/Monthly') {
        plan.duration = '/Yearly';
        plan.price = (parseFloat(plan.price) * 10).toFixed(2);
      } else if (plan.duration === '/Yearly') {
        plan.duration = '/Monthly';
        plan.price = (parseFloat(plan.price) / 10).toFixed(2);
      }
    }
  }

  // Domain selection methods
  onDomainItemClick(domain: string): void {
    // Update selected domain
    this.selectedDomain = domain;

    // Update active state for domain items
    this.domainItems.forEach(item => {
      item.isActive = item.domain === domain;
    });
  }

  onDomainSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedDomain = target.value;

    // Update active state for domain items
    this.domainItems.forEach(item => {
      item.isActive = item.domain === this.selectedDomain;
    });
  }

  onDomainSearchSubmit(event: Event): void {
    event.preventDefault();
    ;
    // Add your domain search logic here
  }

  // Get domain item classes for active state
  getDomainItemClasses(domain: string): string {
    const baseClasses = 'domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end border-start';
    return this.domainItems.find(item => item.domain === domain)?.isActive
      ? `${baseClasses} active-domain`
      : baseClasses;
  }

  // Tab switching methods for animated backgrounds
  switchTab1(tabId: string): void {
    this.activeTab1 = tabId;
    this.moveBackground('pills-tab');
  }

  switchTab2(tabId: string): void {
    this.activeTab2 = tabId;
    this.moveBackground('pills-tabTwo');
  }

  // Move background animation (Angular equivalent of JavaScript function)
  moveBackground(wrapperId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      let wrapper: HTMLElement | null = null;
      if (wrapperId === 'pills-tab' && this.pillsTabRef) {
        wrapper = this.pillsTabRef.nativeElement;
      } else if (wrapperId === 'pills-tabTwo' && this.pillsTabTwoRef) {
        wrapper = this.pillsTabTwoRef.nativeElement;
      } else {
        wrapper = document.getElementById(wrapperId);
      }

      if (!wrapper) return;

      const activeTab = wrapper.querySelector('li .active')?.parentElement as HTMLElement;
      if (!activeTab) return;

      const position = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;

      const background = wrapper.querySelector('.background') as HTMLElement;
      if (background) {
        this.renderer.setStyle(background, 'insetInlineStart', position + 'px');
        this.renderer.setStyle(background, 'width', width + 'px');
      }
    }, 0);
  }

  // Get tab classes for active state
  getTabClasses(tabId: string, tabGroup: number): string {
    const baseClasses = 'nav-link w-100 active-scale-094 rounded-pill tw-px-6 tw-py-305 bg-transparent fw-semibold text-heading hover-text-main-600 h-100 line-clamp-1';
    const isActive = tabGroup === 1 ? this.activeTab1 === tabId : this.activeTab2 === tabId;
    return isActive ? `${baseClasses} active` : baseClasses;
  }

  // Get tab classes for pricing tabs (different styling)
  getPricingTabClasses(tabId: string): string {
    const baseClasses = 'nav-link w-100 active-scale-094 rounded-pill tw-px-705 tw-py-205 bg-transparent fw-semibold text-neutral-600 hover-text-main-600 h-100 line-clamp-1';
    return this.activeTab2 === tabId ? `${baseClasses} active` : baseClasses;
  }

  ngAfterViewInit(): void {
    this.animationService.initAnimations();

    // Initialize background animations for both tab groups
    this.moveBackground('pills-tab');
    this.moveBackground('pills-tabTwo');

    new Swiper(this.hostingPlanSlider.nativeElement, {
      modules: [Navigation],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1500,
      grabCursor: true,
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-hosting-button-next",
        prevEl: ".swiper-hosting-button-prev",
      },
      pagination: {
        el: ".swiper-hosting-pagination",
        clickable: true,
      },
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
        992: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        },
      },
    });

    new Swiper(this.serviceSlider.nativeElement, {
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
      pagination: {
        el: ".service-slider-pagination",
        clickable: true,
      },
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
        992: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      },
    });

    new Swiper(this.aboutSliderOne.nativeElement, {
      modules: [Navigation],
      slidesPerView: 2,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 6000,
      autoplay: {
        delay: 0,
      },
    });

    new Swiper(this.aboutSliderTwo.nativeElement, {
      modules: [Navigation],
      slidesPerView: 2,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 6000,
      autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
      },
    });

  }


}
