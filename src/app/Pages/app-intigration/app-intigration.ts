import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-app-intigration',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './app-intigration.html',
  styleUrl: './app-intigration.css'
})
export class AppIntigration implements AfterViewInit {

modules = [
  {
    icon: 'assets/images/icons/seamless-icon1.png',
    title: 'Employee Management',
    description: 'Manage employee profiles and workforce records.',
    feature: 'employee-management'
  },
  {
    icon: 'assets/images/icons/seamless-icon2.png',
    title: 'Attendance',
    description: 'Track employee attendance and working hours.',
    feature: 'attendance'
  },
  {
    icon: 'assets/images/icons/seamless-icon3.png',
    title: 'Leave Management',
    description: 'Manage leave requests, balances and approvals.',
    feature: 'leave-management'
  },
  {
    icon: 'assets/images/icons/seamless-icon4.png',
    title: 'Payroll',
    description: 'Manage salary and payroll information.',
    feature: 'payroll'
  },
  {
    icon: 'assets/images/icons/seamless-icon5.png',
    title: 'Company Policies',
    description: 'Create and manage company policies.',
    feature: 'company-policies'
  },
  {
    icon: 'assets/images/icons/seamless-icon6.png',
    title: 'KYC & Documents',
    description: 'Manage employee KYC and documents.',
    feature: 'kyc-documents'
  },
  {
    icon: 'assets/images/icons/seamless-icon7.png',
    title: 'Roles & Permissions',
    description: 'Manage user roles and permissions.',
    feature: 'roles-permissions'
  },
  {
    icon: 'assets/images/icons/seamless-icon8.png',
    title: 'Reports & Analytics',
    description: 'Analyze workforce and HR information.',
    feature: 'reports-analytics'
  }
];

  faqs = [
    {
      question: 'What is PeopleVault HRMS?',
      answer:
        'PeopleVault is a centralized HRMS platform designed to bring employee information and core HR operations together in one connected environment.',
      expanded: true,
      duration: 600
    },
    {
      question: 'Who can use PeopleVault?',
      answer:
        'PeopleVault is designed for HR teams, administrators, managers and employees, with access controlled according to configured roles and permissions.',
      expanded: false,
      duration: 700
    },
    {
      question: 'Can I manage employee information in PeopleVault?',
      answer:
        'Yes. Employee profiles, personal and employment information, designations, roles and related workforce records can be managed through the employee management workflows.',
      expanded: false,
      duration: 800
    },
    {
      question: 'Does PeopleVault support attendance and leave?',
      answer:
        'Yes. PeopleVault supports centralized attendance and leave workflows, including leave configuration, requests and approval processes where configured.',
      expanded: false,
      duration: 900
    },
    {
      question: 'Can access be controlled for different users?',
      answer:
        'Yes. Roles and permissions can be configured so users receive access according to their responsibilities.',
      expanded: false,
      duration: 1000
    },
    {
      question: 'Can I see HR information through reports?',
      answer:
        'Yes. PeopleVault provides dashboards and reports for workforce and HR information according to the capabilities configured for your organization.',
      expanded: false,
      duration: 1100
    }
  ];

  constructor(
    private animationService: AnimationService
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }
    // TEMPORARY DEBUG
  debugFeature(module: any): void {
    console.log('==============================');
    console.log('FEATURE CLICKED');
    console.log('Title:', module.title);
    console.log('Link:', module.link);
    console.log('==============================');
  }
}