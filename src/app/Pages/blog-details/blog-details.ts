import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-blog-details',
  imports: [Breadcrumb,CommonModule,RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails {
 categories = [
    { name: 'Business', count: 5 },
    { name: 'Design', count: 12 },
    { name: 'Apps', count: 7 },
    { name: 'Data', count: 3 }
  ];

  recentNews = [
    {
      img: 'assets/images/thumbs/recent-post-img1.png',
      date: 'Jan 23,2022',
      title: 'Budget Issues Force The Our To Become'
    },
    {
      img: 'assets/images/thumbs/recent-post-img2.png',
      date: 'Jan 23,2022',
      title: 'The Best Products That Shape Fashion'
    },
    {
      img: 'assets/images/thumbs/recent-post-img3.png',
      date: 'Jan 23,2022',
      title: 'The Best Products That Shape Fashion'
    }
  ];

  popularTags = [
    'Tourist', 'Traveling', 'Cave', 'Sky Dive', 'hill Climb', 'Oppos', 'landing', 'Oppos'
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
