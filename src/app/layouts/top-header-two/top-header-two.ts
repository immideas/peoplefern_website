import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-top-header-two',
  imports: [RouterLink, CommonModule, NgFor],
  templateUrl: './top-header-two.html',
  styleUrl: './top-header-two.scss'
})
export class TopHeaderTwo {
  selectedCurrency: string = 'US Dollar';

  currencyOptions = [
    'US Dollar',
    'British Pound',
    'Japanese Yen',
    'Swiss Franc',
    'Canadian Dollar'
  ];

  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
  }
}
