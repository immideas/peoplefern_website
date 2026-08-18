import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-project-details',
  imports: [Breadcrumb,CommonModule,RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
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
