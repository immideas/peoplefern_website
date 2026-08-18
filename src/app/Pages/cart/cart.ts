import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { ToastService } from '../../services/toast.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [Breadcrumb, CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.html',
   standalone: true,
  styleUrl: './cart.css'
})
export class Cart {
  cartItems = [
    {
      id: 1,
      name: 'Apple Watch',
      price: 12.00,
      quantity: 1,
      total: 12.00,
      img: 'assets/images/thumbs/cart-img1.png',
      link: 'shop-details'
    },
    {
      id: 2,
      name: 'Sumsang Hand Set',
      price: 34.00,
      quantity: 2,
      total: 68.00,
      img: 'assets/images/thumbs/cart-img2.png',
      link: 'shop-details'
    },
    {
      id: 3,
      name: 'Tata Brand Car',
      price: 345.00,
      quantity: 1,
      total: 345.00,
      img: 'assets/images/thumbs/cart-img3.png',
      link: 'shop-details'
    },
    {
      id: 4,
      name: 'Sumsang Hand Set',
      price: 34.00,
      quantity: 2,
      total: 68.00,
      img: 'assets/images/thumbs/cart-img4.png',
      link: 'shop-details'
    }
  ];

  // Coupon code
  couponCode = '';

  // Calculate totals
  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }

  get total(): number {
    return this.subtotal + 105; // Adding shipping cost
  }

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
  constructor(
    private animationService: AnimationService,
    private toastService: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // TrackBy function for ngFor performance
  trackByItemId(index: number, item: any): number {
    return item.id;
  }

  // Delete item from cart
  deleteItem(itemId: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);

      // Show success toast
      this.toastService.error(
        'Item Deleted',
        `You deleted ${item.name} successfully!`,
        'ph-bold ph-trash'
      );
    }
  }

  // Increment quantity
  incrementQuantity(itemId: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity++;
      item.total = item.price * item.quantity;

      this.toastService.info(
        'Quantity Updated',
        `${item.name} quantity increased to ${item.quantity}`,
        'ph-bold ph-plus-circle'
      );
    }
  }

  // Decrement quantity
  decrementQuantity(itemId: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      item.total = item.price * item.quantity;

      this.toastService.info(
        'Quantity Updated',
        `${item.name} quantity decreased to ${item.quantity}`,
        'ph-bold ph-minus-circle'
      );
    } else if (item && item.quantity === 1) {
      // If quantity is 1, delete the item
      this.deleteItem(itemId);
    }
  }

  // Update quantity manually
  updateQuantity(itemId: number, newQuantity: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      if (newQuantity <= 0) {
        this.deleteItem(itemId);
      } else {
        item.quantity = newQuantity;
        item.total = item.price * item.quantity;

        this.toastService.info(
          'Quantity Updated',
          `${item.name} quantity updated to ${item.quantity}`,
          'ph-bold ph-pencil'
        );
      }
    }
  }

  // Apply coupon code
  applyCoupon(event: Event) {
    event.preventDefault();

    if (!this.couponCode) {
      this.toastService.error(
        'Coupon Code Required',
        'Please enter a coupon code',
        'ph-bold ph-ticket'
      );
      return;
    }

    // Simulate coupon validation
    const validCoupons = ['SAVE10', 'DISCOUNT20', 'WELCOME15'];
    if (validCoupons.includes(this.couponCode.toUpperCase())) {
      this.toastService.success(
        'Coupon Applied',
        `Coupon code "${this.couponCode}" has been applied successfully!`,
        'ph-bold ph-check-circle'
      );
      this.couponCode = '';
    } else {
      this.toastService.error(
        'Invalid Coupon',
        'The coupon code you entered is not valid',
        'ph-bold ph-x-circle'
      );
    }
  }

  // Update cart
  updateCart() {
    this.toastService.success(
      'Cart Updated',
      'Your cart has been updated successfully!',
      'ph-bold ph-check-circle'
    );
  }

  // Clear entire cart
  clearCart() {
    if (this.cartItems.length === 0) {
      this.toastService.warning(
        'Cart Empty',
        'Your cart is already empty',
        'ph-bold ph-shopping-cart'
      );
      return;
    }

    this.cartItems = [];
    this.toastService.error(
      'Cart Cleared',
      'All items have been removed from your cart',
      'ph-bold ph-trash'
    );
  }
}
