import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-shop-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './shop-details.html',
  styleUrl: './shop-details.css'
})
export class ShopDetails {
  @ViewChild('shopThumbSlider', { static: false }) shopThumbSlider!: ElementRef;
  @ViewChild('shopSmallThumbSlider', { static: false }) shopSmallThumbSlider!: ElementRef;

  colors: string[] = ['product-bg-1', 'product-bg-2', 'product-bg-3', 'product-bg-4', 'product-bg-5'];
  selectedColor: number | null = null;

  selectColor(index: number): void {
    this.selectedColor = index;
  }

  sizes: string[] = ['XL', 'XXL', 'M', 'L', '4XL'];
  selectedSize: number | null = null;

  selectSize(index: number): void {
    this.selectedSize = index;
  }

   quantity: number = 0;

  increment(): void {
    this.quantity++;
  }

  decrement(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  tabs = [
    {
      id: 'ProductDetails',
      title: 'Product Details',
      active: true,
      contentTitle: 'Experience is over the world visit',
      contentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nu vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus`,
      moreDetails: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy',
        'type here your detail one by one li more add',
        'has been the industry’s standard dummy text ever since. Lorem Ips',
        'has been the industry’s standard dummy text ever since.'
      ],
      moreDetailsRight: [
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.',
        'Lorem Ipsum generators on the tend to repeat.',
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.'
      ]
    },
    {
      id: 'additionalInformation',
      title: 'additional Information',
      active: false,
      contentTitle: 'Experience is over the world visit',
      contentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nu vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus`,
      moreDetails: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy',
        'type here your detail one by one li more add',
        'has been the industry’s standard dummy text ever since. Lorem Ips',
        'has been the industry’s standard dummy text ever since.'
      ],
      moreDetailsRight: [
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.',
        'Lorem Ipsum generators on the tend to repeat.',
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.'
      ]
    },
    {
      id: 'Review',
      title: 'Review (09)',
      active: false,
      contentTitle: 'Experience is over the world visit',
      contentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nu vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus`,
      moreDetails: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy',
        'type here your detail one by one li more add',
        'has been the industry’s standard dummy text ever since. Lorem Ips',
        'has been the industry’s standard dummy text ever since.'
      ],
      moreDetailsRight: [
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.',
        'Lorem Ipsum generators on the tend to repeat.',
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.'
      ]
    },
    {
      id: 'faq',
      title: 'faq',
      active: false,
      contentTitle: 'Experience is over the world visit',
      contentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nu vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus`,
      moreDetails: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy',
        'type here your detail one by one li more add',
        'has been the industry’s standard dummy text ever since. Lorem Ips',
        'has been the industry’s standard dummy text ever since.'
      ],
      moreDetailsRight: [
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.',
        'Lorem Ipsum generators on the tend to repeat.',
        'Lorem Ipsum generators on the tend to repeat.',
        'If you are going to use a passage.'
      ]
    }
  ];

  products = [
    {
      name: 'Smart wireless headphone',
      img: 'assets/images/thumbs/product-img1.png',
      price: '$112.00',
      link: 'shop-detail',
      rating: 4
    },
    {
      name: 'Go pro hero action camera',
      img: 'assets/images/thumbs/product-img2.png',
      price: '$112.00',
      link: 'shop-detail',
      rating: 4
    },
    {
      name: 'Colorful apple Ipad',
      img: 'assets/images/thumbs/product-img3.png',
      price: '$112.00',
      link: 'shop-detail',
      rating: 4
    },
    {
      name: 'Humidifiler white grow',
      img: 'assets/images/thumbs/product-img4.png',
      price: '$112.00',
      link: 'shop-detail',
      rating: 4
    }
  ];
  constructor(private animationService: AnimationService) { }

  ngAfterViewInit(): void {
    this.animationService.initAnimations();

    
    const shopSmallThumbs = new Swiper(this.shopSmallThumbSlider.nativeElement, {
      modules: [Navigation],
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    
    const shopThumbSlider = new Swiper(this.shopThumbSlider.nativeElement, {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: shopSmallThumbs,
      },
    });
  }



}
