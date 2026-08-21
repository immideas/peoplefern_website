import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    Breadcrumb,
    CommonModule,
    RouterLink
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements AfterViewInit {

  // =========================================================
  // SECURITY HERO
  // =========================================================

  securityHighlights = [
    {
      icon: 'ph-bold ph-shield-check',
      title: 'Secure by Design',
      description:
        'PeopleVault is designed with security-focused controls to help organizations protect workforce information.'
    },
    {
      icon: 'ph-bold ph-lock-key',
      title: 'Access Control',
      description:
        'Control access to HR information and system functionality based on user roles and responsibilities.'
    },
    {
      icon: 'ph-bold ph-database',
      title: 'Protected HR Data',
      description:
        'Keep employee and organizational information within a centralized and controlled HR environment.'
    }
  ];


  // =========================================================
  // SECURITY FEATURES
  // =========================================================

  securityFeatures = [
    {
      icon: 'ph-bold ph-shield-check',
      title: 'Role-Based Access Control',
      description:
        'Manage access according to employee roles, responsibilities and organizational requirements.'
    },
    {
      icon: 'ph-bold ph-lock',
      title: 'Permission Management',
      description:
        'Control which users can access specific HR modules, features and workforce information.'
    },
    {
      icon: 'ph-bold ph-user-circle-check',
      title: 'Secure User Access',
      description:
        'Help ensure that HR system access is provided to authorized users according to their responsibilities.'
    },
    {
      icon: 'ph-bold ph-database',
      title: 'Employee Data Protection',
      description:
        'Manage employee profiles, employment records and workforce information in a centralized environment.'
    },
    {
      icon: 'ph-bold ph-eye-slash',
      title: 'Privacy-Focused Access',
      description:
        'Reduce unnecessary access to sensitive workforce information through structured permissions.'
    },
    {
      icon: 'ph-bold ph-arrows-clockwise',
      title: 'Security Improvements',
      description:
        'Security practices can evolve as organizational requirements and platform capabilities change.'
    }
  ];


  // =========================================================
  // PROTECTED AREAS
  // =========================================================

  protectedAreas = [
    {
      icon: 'ph-bold ph-identification-card',
      title: 'Employee Information',
      description:
        'Employee profiles and employment information can be managed through controlled access.'
    },
    {
      icon: 'ph-bold ph-calendar-check',
      title: 'Attendance & Leave',
      description:
        'Attendance and leave information can be accessed according to assigned permissions.'
    },
    {
      icon: 'ph-bold ph-file-text',
      title: 'HR Documents',
      description:
        'Important workforce documents can be managed within a structured HR environment.'
    },
    {
      icon: 'ph-bold ph-chart-bar',
      title: 'HR Reports',
      description:
        'Workforce reports can be made available to users according to their responsibilities.'
    }
  ];


  // =========================================================
  // SECURITY PRINCIPLES
  // =========================================================

  securityPrinciples = [
    {
      number: '01',
      title: 'Controlled Access',
      description:
        'Provide users with access appropriate to their role and responsibilities.'
    },
    {
      number: '02',
      title: 'Permission Management',
      description:
        'Use structured permissions to manage access to HR functionality and information.'
    },
    {
      number: '03',
      title: 'Responsible Data Handling',
      description:
        'Encourage responsible handling of employee and organizational information.'
    },
    {
      number: '04',
      title: 'Security Awareness',
      description:
        'Combine platform security controls with responsible practices from administrators and users.'
    }
  ];


  // =========================================================
  // SECURITY FAQ
  // =========================================================

  securityFaqs = [
    {
      question: 'How does PeopleVault protect employee information?',
      answer:
        'PeopleVault uses security-focused access and permission concepts to help organizations manage workforce information responsibly.',
      show: true
    },
    {
      question: 'Can administrators control user access?',
      answer:
        'Yes. Administrators can use role and permission concepts to control access to different areas of the HR system.'
    },
    {
      question: 'Can sensitive HR information be restricted?',
      answer:
        'Access can be structured around user roles and permissions so that sensitive workforce information is available only to authorized users.'
    },
    {
      question: 'Why is access control important in HRMS?',
      answer:
        'HR systems contain important employee and organizational information. Controlled access helps reduce unnecessary exposure of sensitive data.'
    },
    {
      question: 'Who should have access to HR information?',
      answer:
        'Access should generally be provided according to the responsibilities of each user and the requirements of the organization.'
    }
  ];


  // =========================================================
  // SECURITY STATS
  // =========================================================

  securityStats = [
    {
      value: 'RBAC',
      label: 'Role-Based Access'
    },
    {
      value: '24/7',
      label: 'Security-Focused Platform'
    },
    {
      value: '100%',
      label: 'Permission Awareness'
    },
    {
      value: 'HRMS',
      label: 'Centralized Workforce Data'
    }
  ];


  // =========================================================
  // SECURITY TAGS
  // =========================================================

  tags2 = [
    {
      label: 'Data Protection',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'Access Control',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },
    {
      label: 'HR Security',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'Privacy',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },
    {
      label: 'Employee Data',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },
    {
      label: 'Permissions',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'Secure HRMS',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },
    {
      label: 'HR Compliance',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }
  ];


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService,
    private toastService: ToastService
  ) {}


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }


  // =========================================================
  // FAQ TOGGLE
  // =========================================================

  toggleFaq(index: number): void {
    this.securityFaqs[index].show =
      !this.securityFaqs[index].show;
  }


  // =========================================================
  // CONTACT SECURITY TEAM
  // =========================================================

  contactSecurityTeam(): void {

    this.toastService.info(
      'Security Team',
      'Our team can help answer your security and data protection questions.',
      'ph-bold ph-shield-check'
    );

  }


  // =========================================================
  // REPORT SECURITY CONCERN
  // =========================================================

  reportSecurityConcern(): void {

    this.toastService.info(
      'Security Concern',
      'Please contact the PeopleVault team with details about your security concern.',
      'ph-bold ph-warning'
    );

  }


  // =========================================================
  // TRACK BY
  // =========================================================

  trackByIndex(index: number): number {
    return index;
  }

}