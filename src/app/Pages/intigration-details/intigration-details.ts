import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intigration-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './intigration-details.html',
  styleUrl: './intigration-details.css',
})
export class IntigrationDetails implements AfterViewInit {
  // Counter ViewChild reference
  @ViewChild('integrationCounter', { static: false }) integrationCounter!: ElementRef;

  featureList = [
    'Empower Through Security',
    'User experience',
    'User behavior tracking',
    'Data sync integration',
    'Cloud storage integration',
    'Every Act Counts',
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
    { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-pink' },
  ];

  integrations = [
    {
      icon: 'assets/images/icons/seamless-icon1.png',
      title: 'Hubspot Contacts Sync',
      desc: 'Web hosting provides everything idea online. From where your of more on',
      link: '/intigration-details',
    },
    {
      icon: 'assets/images/icons/seamless-icon6.png',
      title: 'Github integration',
      desc: 'Web hosting provides everything idea online. From where your of more on',
      link: '/intigration-details',
    },
    {
      icon: 'assets/images/icons/seamless-icon2.png',
      title: 'Spotify Online Platform',
      desc: 'Web hosting provides everything idea online. From where your of more on',
      link: '/intigration-details',
    },
    {
      icon: 'assets/images/icons/seamless-icon3.png',
      title: 'Dropbox Streaming',
      desc: 'Web hosting provides everything idea online. From where your of more on',
      link: '/intigration-details',
    },
  ];

  faqs = [
    {
      id: 'collapseTwo',
      title: 'What is Sassly?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: false,
    },
    {
      id: 'collapseOne',
      title: 'Why should I choose Sassly?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: true,
    },
    {
      id: 'collapseThree',
      title: 'Can I upgrade to a different plan at a later time?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: false,
    },
    {
      id: 'collapseFour',
      title: 'What’s the cost of additional users?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: false,
    },
    {
      id: 'collapseFive',
      title: 'What’s the commitment?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: false,
    },
    {
      id: 'collapseSix',
      title: 'What languages does Sassly AI support?',
      desc: `GoDaddy offers more than just a platform to
        build your website, we offer everything you need to create an effective,
        memorable online presence. Already have a site? We offer hosting plans
        that will keep it fast, secure and online. Our professional`,
      show: false,
    },
  ];

  // Counter value
  integrationCount = 0; // 2k+

  constructor(private animationService: AnimationService, private counterService: CounterService) {}
  ngAfterViewInit(): void {
    this.animationService.initAnimations();

    // Initialize counters after a short delay to ensure ViewChild elements are ready
    setTimeout(() => {
      this.initCounters();
    }, 100);
  }

  // Initialize counter animations
  initCounters(): void {
    // Integration counter (2k+) - Slower animation with delay
    if (this.integrationCounter && this.integrationCounter.nativeElement) {
      setTimeout(() => {
        this.counterService.animateCounterOnScroll(
          this.integrationCounter.nativeElement,
          0,
          2,
          3000, // 3 seconds
          (value) => {
            this.integrationCount = value;
          },
          'k+'
        );
      }, 200); // 200ms delay
    } else {
    }
  }

  // Format counter values for display
  formatCounterValue(value: number, suffix: string): string {
    if (suffix === 'k+') {
      return Math.round(value) + 'k+';
    }
    return Math.round(value).toString();
  }

  // Test counter animation manually
  testCounters(): void {
    // Test integration counter
    this.counterService.animateCounter(
      0,
      2,
      3000,
      (value) => {
        this.integrationCount = value;
      },
      'k+'
    );
  }
}
