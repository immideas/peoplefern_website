import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-about',
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {

  /**
   * Decorative images used by the existing About hero artwork.
   * These are retained from the current theme so the existing about.css
   * positioning/animation can continue to work.
   */
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
    { src: 'assets/images/thumbs/about-banner-img12.png', extraClass: 'animation-delay-3 twelve' }
  ];

  /**
   * PeopleVault mission and vision content from the public website document.
   */
  missionVision = [
    {
      title: 'Our Mission',
      icon: 'ph-bold ph-target',
      description:
        'Make HR operations simpler, more organized and more accessible through practical digital workflows that fit how organizations actually work — not the other way around.'
    },
    {
      title: 'Our Vision',
      icon: 'ph-bold ph-eye',
      description:
        'Build a reliable, scalable HR technology platform that helps organizations of every size manage their people effectively, from their first ten hires to their thousandth.'
    }
  ];

  /**
   * PeopleVault values from the approved public website content document.
   */
  values = [
    {
      title: 'Customer Focus',
      icon: 'ph-bold ph-users-three',
      description: 'We build around real HR workflows, not assumptions.',
      duration: '600'
    },
    {
      title: 'Reliability',
      icon: 'ph-bold ph-shield-check',
      description: 'HR teams depend on us to be accurate and available.',
      duration: '700'
    },
    {
      title: 'Simplicity',
      icon: 'ph-bold ph-sparkle',
      description: 'Powerful does not have to mean complicated.',
      duration: '800'
    },
    {
      title: 'Security',
      icon: 'ph-bold ph-lock-key',
      description: 'Workforce data is sensitive, and we treat it that way.',
      duration: '900'
    },
    {
      title: 'Continuous Improvement',
      icon: 'ph-bold ph-arrows-clockwise',
      description: 'The platform evolves with customer feedback.',
      duration: '1000'
    }
  ];

  constructor(
    private animationService: AnimationService
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }
}