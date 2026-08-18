import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [Breadcrumb,CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  blogs = [
    {
      image: 'assets/images/thumbs/blog-page-img1.png',
      date: '24 Feb',
      author: 'Mehedii .H',
      comments: 3,
      readTime: '3 min Read',
      title: 'The whimsically named Egg Canvas brainch',
      excerpt: 'There are many variations of passages of Lorem Ipsum available...',
      link: 'blog-details'
    },
    {
      image: 'assets/images/thumbs/blog-page-img2.png',
      date: '24 Feb',
      author: 'Mehedii .H',
      comments: 3,
      readTime: '3 min Read',
      title: 'Another creative article title',
      excerpt: 'There are many variations of passages of Lorem Ipsum available...',
      link: 'blog-details'
    },
    {
      image: 'assets/images/thumbs/blog-page-img3.png',
      date: '24 Feb',
      author: 'Mehedii .H',
      comments: 3,
      readTime: '3 min Read',
      title: 'The whimsically named Egg Canvas brainch',
      excerpt: 'There are many variations of passages of Lorem Ipsum available...',
      link: 'blog-details'
    }
  ];

  author = {
    image: 'assets/images/thumbs/blogger.png',
    name: 'Rosalina D. Willaim',
    role: 'Blogger/Photographer',
    bio: 'The whimsically named Egg Canvas is the design director and photographer in New York.',
    socials: [
      { icon: 'ph ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph ph-x-logo', link: 'https://www.twitter.com' },
      { icon: 'ph ph-instagram-logo', link: 'https://www.instagram.com' },
      { icon: 'ph ph-youtube-logo', link: 'https://www.youtube.com' },
    ]
  };

  recentPosts = [
    {
      image: 'assets/images/thumbs/recent-post-img1.png',
      date: 'Jan 23,2022',
      title: 'Budget Issues Force The Our To Become',
      link: 'blog-details'
    },
    {
      image: 'assets/images/thumbs/recent-post-img2.png',
      date: 'Jan 23,2022',
      title: 'The Best Products That Shape Fashion',
      link: 'blog-details'
    },
    {
      image: 'assets/images/thumbs/recent-post-img3.png',
      date: 'Jan 23,2022',
      title: 'The Best Products That Shape Fashion',
      link: 'blog-details'
    }
  ];

  categories = [
    { name: 'Mobile Set', count: 3, link: 'blog' },
    { name: 'Laptop', count: 5, link: 'blog' },
    { name: 'Tech News', count: 7, link: 'blog' },
    { name: 'Gadgets', count: 2, link: 'blog' },
  ];

  tags = [
    { name: 'Tourist', link: 'blog' },
    { name: 'Traveling', link: 'blog' },
    { name: 'Cave', link: 'blog' },
    { name: 'Sky Dive', link: 'blog' },
    { name: 'Hill Climb', link: 'blog' },
    { name: 'Oppos', link: 'blog' },
    { name: 'Landing', link: 'blog' },
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
