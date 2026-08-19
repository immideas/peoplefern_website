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
    { src: 'assets/images/thumbs/brand-three-img6.png', aosDuration: 800 }
  ];

  features = [
    {
      aosDuration: 1000,
      title: 'Employee Management',
      titleClass: 'max-w-250-px',
      paragraph:
        'Manage employee profiles, departments, designations and workforce information from one connected HR platform.',
      link: 'Explore Employee Management',
      image1: 'assets/images/thumbs/features-four-thumb101.png',
      image1Class:
        'max-w-40-percent position-absolute top-0 tw-mt-5 tw-end-0 tw-me-5 common-shadow-twentyFive tw-rounded-2xl d-xl-block d-none',
      image2: 'assets/images/thumbs/features-four-thumb102.png',
      image2Class:
        'max-w-40-percent position-absolute bottom-0 tw-start-45 tw-me-5 common-shadow-twentyFive tw-rounded-2xl'
    },
    {
      aosDuration: 1200,
      title: 'Attendance & Leave Management',
      titleClass: 'max-w-400-px',
      paragraph:
        'Track attendance, working hours, leave requests, approvals and workforce availability with less manual effort.',
      link: 'Explore Attendance & Leave',
      image1: 'assets/images/thumbs/features-four-thumb2.png',
      image1Class:
        'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
    },
    {
      aosDuration: 1000,
      title: 'Payroll Management',
      titleClass: 'max-w-400-px',
      paragraph:
        'Simplify salary processing, salary components and payroll workflows using centralized employee information.',
      link: 'Explore Payroll',
      image1: 'assets/images/thumbs/features-four-thumb3.png',
      image1Class:
        'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-10 tw-rounded-2xl'
    },
    {
      aosDuration: 1200,
      title: 'Reports & Analytics',
      titleClass: 'max-w-432-px',
      paragraph:
        'Turn workforce data into useful insights with reports that help HR teams and business leaders make better decisions.',
      link: 'Explore Reports',
      image1: 'assets/images/thumbs/features-four-thumb4.png',
      image1Class:
        'max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
    }
  ];

  slides2 = [
    {
      logo: 'assets/images/thumbs/website-owner-img1.png',
      text:
        'PeopleVault brings employee information and HR processes together in one connected platform, making everyday HR operations simpler.',
      userImg: 'assets/images/thumbs/testimonials-short-img1.png',
      name: 'PeopleVault Customer',
      designation: 'HR Team',
      subtitle: '',
      rating: 'assets/images/icons/ratings.svg'
    },
    {
      logo: 'assets/images/thumbs/website-owner-img2.png',
      text:
        'A connected HR platform gives our team better visibility into employees, attendance, leave and workforce operations.',
      userImg: 'assets/images/thumbs/testimonials-short-img2.png',
      name: 'PeopleVault Customer',
      designation: 'Business Team',
      subtitle: '',
      rating: 'assets/images/icons/ratings.svg'
    },
    {
      logo: 'assets/images/thumbs/website-owner-img3.png',
      text:
        'PeopleVault helps reduce repetitive HR work and gives managers a simpler way to manage people and processes.',
      userImg: 'assets/images/thumbs/testimonials-short-img3.png',
      name: 'PeopleVault Customer',
      designation: 'Organization',
      subtitle: '',
      rating: 'assets/images/icons/ratings.svg'
    }
  ];

  tabs = [
    { id: 'pills-dashboard', label: 'HR Dashboard', active: true },
    { id: 'pills-employee', label: 'Employee Management', active: false },
    { id: 'pills-attendance', label: 'Attendance', active: false },
    { id: 'pills-leave', label: 'Leave Management', active: false },
    { id: 'pills-payroll', label: 'Payroll', active: false },
    { id: 'pills-reports', label: 'Reports & Analytics', active: false }
  ];
  activeTab = 'pills-dashboard';

    // Counter values
  integrationCount = 0;
  clientsCount1 = 0;
  percentageCount = 0;
  clientsCount2 = 0;

  // Accordion data
  faqItems = [
    {
      id: 'collapseTwo',
      title: 'Can PeopleVault manage employee information?',
      content:
        'PeopleVault provides a centralized HR platform for employee profiles, departments, designations and workforce records.',
      expanded: false
    },
    {
      id: 'collapseOne',
      title: 'Can we manage attendance and leave?',
      content:
        'Yes. PeopleVault is designed to support attendance tracking, leave requests, approvals and related HR workflows.',
      expanded: true
    },
    {
      id: 'collapseThree',
      title: 'Can PeopleVault help with payroll and reporting?',
      content:
        'PeopleVault brings payroll-related workflows and HR reporting into one connected platform so teams can manage operations and gain useful workforce insights.',
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
selectTab(selectedTab: any): void {

  // Update active tab styling
  this.tabs.forEach(tab => {
    tab.active = tab.id === selectedTab.id;
  });

  // Update the preview content
  this.activeTab = selectedTab.id;
}
getPreviewTitle(): string {

  switch (this.activeTab) {

    case 'pills-employee':
      return 'Employee Management';

    case 'pills-attendance':
      return 'Attendance';

    case 'pills-leave':
      return 'Leave Management';

    case 'pills-payroll':
      return 'Payroll';

    case 'pills-reports':
      return 'Reports & Analytics';

    default:
      return 'HR Dashboard';
  }
}


getPreviewDescription(): string {

  switch (this.activeTab) {

    case 'pills-employee':
      return 'Manage employees, departments and workforce information.';

    case 'pills-attendance':
      return 'Track employee attendance and workforce presence.';

    case 'pills-leave':
      return 'Manage employee leave requests and approvals.';

    case 'pills-payroll':
      return 'Process payroll, salary and employee deductions.';

    case 'pills-reports':
      return 'Monitor workforce performance with powerful analytics.';

    default:
      return "Welcome back! Here's what's happening today.";
  }
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