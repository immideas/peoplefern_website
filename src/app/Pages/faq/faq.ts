import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-faq',
  imports: [CommonModule,RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
 faqs = [
    {
      id: 'collapseOne',
      question: 'Why should I choose Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: true
    },
    {
      id: 'collapseTwo',
      question: 'What is Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseThree',
      question: 'Can I upgrade to a different plan at a later time?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseFour',
      question: 'What’s the cost of additional users?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseFive',
      question: 'What’s the commitment?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseSix',
      question: 'What languages does Sassly AI support?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    }
  ];

   faqsTwo = [
    {
      id: 'collapseOneTwo',
      question: 'Why should I choose Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: true
    },
    {
      id: 'collapseTwoTwo',
      question: 'What is Sassly?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseThreeTwo',
      question: 'Can I upgrade to a different plan at a later time?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseFourTwo',
      question: 'What’s the cost of additional users?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseFiveTwo',
      question: 'What’s the commitment?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    },
    {
      id: 'collapseSixTwo',
      question: 'What languages does Sassly AI support?',
      answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional',
      show: false
    }
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
 constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }
}
