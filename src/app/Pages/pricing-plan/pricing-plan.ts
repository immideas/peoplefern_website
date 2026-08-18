import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-plan',
  imports: [RouterLink, Breadcrumb, CommonModule],
  templateUrl: './pricing-plan.html',
  styleUrl: './pricing-plan.css',
})
export class PricingPlan {
  plans = [
    {
      title: 'Basic plan',
      description: 'Customized anything in anytime',
      price: '$1.99',
      period: '/Yearly',
      renews: '$9.88/month',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
    },
    {
      title: 'Premium plan',
      description: 'Customized anything in anytime',
      price: '$9.99',
      period: '/Yearly',
      renews: '$9.88/month',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
    },
    {
      title: 'Pro plan',
      description: 'Customized anything in anytime',
      price: '$19.99',
      period: '/Yearly',
      renews: '$9.88/month',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
    },
  ];

  plans2 = [
    {
      price: '$19',
      period: '/Month',
      description: 'Smart Pricing for good services',
      planName: 'Regular Plan',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
      aosDuration: 600,
    },
    {
      price: '$29',
      period: '/Month',
      description: 'Smart Pricing for good services',
      planName: 'Premium Plan',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
      aosDuration: 800,
    },
    {
      price: '$39',
      period: '/Month',
      description: 'Smart Pricing for good services',
      planName: 'Pro Plan',
      features: [
        'Real-time tracking and notifications',
        'Real-time analytics',
        'Drag and drop templates',
        'Project Management',
        '24/7 email and chat support',
      ],
      aosDuration: 900,
    },
  ];

  plans3 = [
    {
      label: 'Regular',
      labelBg: 'bg-main-600',
      price: '$15.',
      period: '/m',
      description: 'Data curation involve the careful election organization, and maintenance',
      features: [
        '2 Limited sites available',
        '1 GB storage per site',
        'Up to 5 pages per site',
        'Free SSL for custom domain',
        'Connect custom domain',
      ],
      aosDuration: 600,
      btnClass: 'btn-main-two',
    },
    {
      label: 'Regular',
      labelBg: 'bg-orange',
      price: '$15.',
      period: '/m',
      description: 'Data curation involve the careful election organization, and maintenance',
      features: [
        '2 Limited sites available',
        '1 GB storage per site',
        'Up to 5 pages per site',
        'Free SSL for custom domain',
        'Connect custom domain',
      ],
      aosDuration: 800,
      btnClass: 'btn-main-two',
    },
    {
      label: 'Regular',
      labelBg: 'bg-green',
      price: '$15.',
      period: '/m',
      description: 'Data curation involve the careful election organization, and maintenance',
      features: [
        '2 Limited sites available',
        '1 GB storage per site',
        'Up to 5 pages per site',
        'Free SSL for custom domain',
        'Connect custom domain',
      ],
      aosDuration: 1000,
      btnClass: 'btn-main-two',
    },
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

  constructor(private animationService: AnimationService) {}
  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }
}
