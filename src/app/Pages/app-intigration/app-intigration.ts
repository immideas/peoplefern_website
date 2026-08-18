import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-app-intigration',
  imports: [RouterLink, CommonModule],
  templateUrl: './app-intigration.html',
  styleUrl: './app-intigration.css'
})
export class AppIntigration implements AfterViewInit {
  // Counter ViewChild references
  @ViewChild('clientsCounter1', { static: false }) clientsCounter1!: ElementRef;
  @ViewChild('percentageCounter', { static: false }) percentageCounter!: ElementRef;
  @ViewChild('clientsCounter2', { static: false }) clientsCounter2!: ElementRef;

  distractionIcons = [
    { class: 'one', src: 'assets/images/thumbs/distraction-icon1.png', extraClass: 'animation-scalation', imgClass: '' },
    { class: 'two', src: 'assets/images/thumbs/distraction-icon2.png', extraClass: 'animation-upDown', imgClass: '' },
    { class: 'three', src: 'assets/images/thumbs/distraction-icon3.png', extraClass: 'animation-upDown animation-delay-1', imgClass: '' },
    { class: 'four', src: 'assets/images/thumbs/distraction-icon4.png', extraClass: 'animation-upDown animation-delay-2', imgClass: '' },
    { class: 'five', src: 'assets/images/thumbs/distraction-icon5.png', extraClass: 'animation-scalation animation-delay-1', imgClass: '' },
    { class: 'six', src: 'assets/images/thumbs/distraction-icon6.png', extraClass: 'animation-scalation animation-delay-2', imgClass: '' },
    { class: 'seven', src: 'assets/images/thumbs/distraction-icon7.png', extraClass: '', imgClass: '' }
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

   integrations = [
    { img: 'assets/images/icons/seamless-icon1.png', title: 'Hubspot Contacts Sync', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon2.png', title: 'Spotify Online Platform', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon3.png', title: 'Dropbox Streaming', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon4.png', title: 'Google Photos Social Medea', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon5.png', title: 'Zapier Social Media', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon6.png', title: 'Slack Contacts Sync', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon7.png', title: 'Shopify Contacts Sync', description: 'Build online communities with effective audience communication with various track' },
    { img: 'assets/images/icons/seamless-icon8.png', title: 'Github integration', description: 'Build online communities with effective audience communication with various track' },
  ];

   faqs = [
    {
      question: 'What is Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: false,
      duration: 800
    },
    {
      question: 'Why should I choose Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: true, // default open
      duration: 800
    },
    {
      question: 'Can I upgrade to a different plan at a later time?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: false,
      duration: 800
    },
    {
      question: 'What’s the cost of additional users?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: false,
      duration: 800
    },
    {
      question: 'What’s the commitment?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: false,
      duration: 800
    },
    {
      question: 'What languages does Sassly AI support?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need...',
      expanded: false,
      duration: 800
    }
  ];

  // Counter values
  clientsCount1 = 0; // 282+
  percentageCount = 0; // 95%
  clientsCount2 = 0; // 282+

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
