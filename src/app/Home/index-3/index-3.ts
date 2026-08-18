import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-index-3',
  imports: [RouterLink, CommonModule],
  templateUrl: './index-3.html',
  styleUrls: ['./index-3.css']

})
export class Index3 implements AfterViewInit {
  @ViewChild('brandSlider', { static: false }) brandSlider!: ElementRef;
  @ViewChild('planExecuteSlider', { static: false }) planExecuteSlider!: ElementRef;
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef;

  brandSlides = [
    { src: 'assets/images/thumbs/brand-three-img1.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img2.png', aosDuration: 700 },
    { src: 'assets/images/thumbs/brand-three-img3.png', aosDuration: 800 },
    { src: 'assets/images/thumbs/brand-three-img4.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img5.png', aosDuration: 700 },
    { src: 'assets/images/thumbs/brand-three-img6.png', aosDuration: 800 },
    { src: 'assets/images/thumbs/brand-three-img7.png', aosDuration: 600 },
    { src: 'assets/images/thumbs/brand-three-img5.png', aosDuration: 700 }
  ];
  slides = [
    {
      img: 'assets/images/thumbs/plan-execute-img1.png',
      title: 'Custom templates',
      description: 'Web hosting provides everything you idea online. From where your',
      aosDuration: 600
    },
    {
      img: 'assets/images/thumbs/plan-execute-img3.png',
      title: 'Collaboration tools',
      description: 'Web hosting provides everything you idea online. From where your',
      aosDuration: 700
    },
    {
      img: 'assets/images/thumbs/plan-execute-img2.png',
      title: 'Operations teams',
      description: 'Web hosting provides everything you idea online. From where your',
      aosDuration: 800
    },
    {
      img: 'assets/images/thumbs/plan-execute-img4.png',
      title: 'Project Management',
      description: 'Web hosting provides everything you idea online. From where your',
      aosDuration: 900
    },
    {
      img: 'assets/images/thumbs/plan-execute-img3.png',
      title: 'Collaboration tools',
      description: 'Web hosting provides everything you idea online. From where your',
      aosDuration: 700
    }
  ];
  featureGroups = [
    {
      duration: 700,
      features: [
        {
          icon: 'assets/images/icons/features-three-icon1.svg',
          title: 'Asynchronous Meetings',
          description: 'We are committed to your success. Our platform is built to drive'
        },
        {
          icon: 'assets/images/icons/features-three-icon2.svg',
          title: 'Monitoring your Time',
          description: 'We are committed to your success. Our platform is built to drive'
        }
      ]
    },
    {
      duration: 800,
      features: [
        {
          title: 'built-in Automation',
          icon: 'assets/images/icons/features-three-icon3.svg',
          description: 'We are committed to your success. Our platform is built to drive'
        },
        {
          icon: 'assets/images/icons/features-three-icon4.svg',
          title: 'Remote-Friendly Collaboration',
          description: 'We are committed to your success. Our platform is built to drive'
        }
      ]
    }
  ];
  slides2 = [
    {
      ratingImg: 'assets/images/icons/ratings.svg',
      testimonial: `Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger, and we couldn't be prouder of that. elevating your optimizing Business  Growth.`,
      clientImg: 'assets/images/thumbs/client-img.png',
      name: 'James anderson',
      designation: 'Ceo',
      subtitle: 'and Founder'
    },
    {
      ratingImg: 'assets/images/icons/ratings.svg',
      testimonial: `Sasstech hires great people from a widely variety of backgrounds, which simply makes our company stronger, and we couldn't be prouder of that. elevating your optimizing Business  Growth.`,
      clientImg: 'assets/images/thumbs/client-img.png',
      name: 'James anderson',
      designation: 'Ceo',
      subtitle: 'and Founder'
    }
  ];

  distractionTags = [
    { text: 'Project management', class: 'gradient-bg-six' },
    { text: 'Technology', class: 'bg-paste' },
    { text: 'Technology', class: 'gradient-bg-six' },
    { text: 'Project management', class: 'bg-yellow' },
    { text: 'Technology', class: 'bg-orange' },
    { text: 'Technology', class: 'gradient-bg-six' },
    { text: 'Project management', class: 'bg-orange' },
    { text: 'Technology', class: 'gradient-bg-six' },
    { text: 'Project management', class: 'bg-paste' },
    { text: 'Technology', class: 'bg-pink' }
  ];

  constructor(private animationService: AnimationService) { }



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

    new Swiper(this.planExecuteSlider.nativeElement, {
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
        el: ".plan-execute-pagination",
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

    new Swiper(this.testimonialSlider.nativeElement, {
      modules: [Navigation],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1500,
      grabCursor: true,
      loop: true,
      spaceBetween: 24,
      slidesPerView: 1,
      pagination: {
        el: ".plan-execute-pagination",
        clickable: true,
      },
    });

  }
}