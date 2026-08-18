import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-service-details',
  imports: [Breadcrumb,CommonModule, RouterLink],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails implements OnInit {
  // Video modal state
  isVideoModalOpen: boolean = false;
  currentVideoUrl: SafeResourceUrl | null = null;

  // Video URLs
  videoUrl: string = 'https://www.youtube.com/watch?v=MFLVmAE4cqg';

  services = [
  'Cargo Domestic Service',
  'Air Freight Services',
  'Intermodal Shipping',
  'Freeze product Shipping',
  'Hot Shot Trucking',
  'Priority Transportation'
];

faqs = [
  {
    question: 'What is Sassly?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseOne',
    show: false
  },
  {
    question: 'Why should I choose Sassly?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseTwo',
    show: true
  },
  {
    question: 'Can I upgrade to a different plan at a later time?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseThree',
    show: false
  },
  {
    question: 'What’s the cost of additional users?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseFour',
    show: false
  },
  {
    question: 'What’s the commitment?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseFive',
    show: false
  },
  {
    question: 'What languages does Sassly AI support?',
    answer: 'GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online.',
    collapseId: 'collapseSix',
    show: false
  }
];
 constructor(
    private animationService: AnimationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Initialize any required setup
  }

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // Video modal methods
  onPlayButtonClick(event: Event): void {
    event.preventDefault();
    this.openVideoModal();
  }

  openVideoModal(): void {
    // Convert YouTube watch URL to embed URL
    const embedUrl = this.videoUrl.replace('watch?v=', 'embed/') + '?autoplay=1&rel=0&modestbranding=1';
    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    this.isVideoModalOpen = true;
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false;
    this.currentVideoUrl = null;
  }

  onVideoOverlayClick(): void {
    this.closeVideoModal();
  }

  onVideoCloseClick(): void {
    this.closeVideoModal();
  }
}
