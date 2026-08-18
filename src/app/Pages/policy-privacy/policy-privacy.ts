import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy-privacy',
  imports: [Breadcrumb,CommonModule, RouterLink],
  templateUrl: './policy-privacy.html',
  styleUrl: './policy-privacy.css'
})
export class PolicyPrivacy {
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

 tabs = [
    {
      id: 'v-pills-home',
      label: 'Bookings & Prices',
      active: true,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-profile',
      label: 'Payments, Refunds & Credits',
      active: false,
     content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>` // Replace with actual content for this tab (similar to above)
    },
    {
      id: 'v-pills-disabled',
      label: 'Changes',
      active: false,
     content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-messages',
      label: 'Cancellations',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-settings',
      label: 'Included Services',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-TripOperation',
      label: 'Trip Operation',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-Participation',
      label: 'Participation',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-Passports',
      label: 'Passports, Visas & Entry Require',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-Information',
      label: 'Your Information & Privacy',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    {
      id: 'v-pills-Miscellanea',
      label: 'Miscellanea',
      active: false,
      content: `
        <h3 class="tw-mb-8">1.Cancellation and Changes</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company's control. It is essential that you take out adequate travel insurance.</p>

        <h3 class="tw-mb-8">1.Cancellation by You</h3>
        <h6 class="tw-mb-5">Description:</h6>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">a) Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company's control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.</p>
        <div class="tw-my-4">
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>30 days or more 50% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>15 - 30 days 100% of Deposit</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>8 - 15 days 80% of Tour Cost</span></p>
          <p class="fw-bold text-neutral-600 tw-text-lg tw-mb-4 d-flex align-items-center tw-gap-3"><span class="tw-w-105 tw-h-105 bg-neutral-600 rounded-circle"></span><span>1 - 7 days 100% of Tour Cost</span></p>
        </div>
        <p class="text-neutral-500 tw-leading-212 tw-mb-6">b) No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.</p>`
    },
    
    
  ];
   constructor(private animationService: AnimationService) {}
  
    ngAfterViewInit(): void {
      this.animationService.initAnimations();
    }
}
