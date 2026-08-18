import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mega-menu',
  imports: [RouterLink],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.scss'
})
export class MegaMenu implements OnChanges {
  @Input() show: boolean = false;
  @Output() mouseenter = new EventEmitter<void>();
  @Output() mouseleave = new EventEmitter<void>();
  @Output() navLinkClick = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    // Handle input changes if needed
  }

  onMouseEnter() {
    this.mouseenter.emit();
  }

  onMouseLeave() {
    this.mouseleave.emit();
  }

  onNavLinkClick() {
    this.navLinkClick.emit();
  }
}
