import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-three',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-three.html',
  styleUrl: './footer-three.scss'
})
export class FooterThree {
 @Input() sectionClass: string = '';

}
