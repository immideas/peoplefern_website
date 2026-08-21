import { AfterViewInit, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';

import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-service-details',

  standalone: true,

  imports: [CommonModule, RouterLink, Breadcrumb],

  templateUrl: './service-details.html',

  styleUrl: './service-details.css',
})
export class ServiceDetails implements AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }
}
