import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { AnimationService } from '../../services/animation';

interface ComparisonFeature {
  name: string;
  description: string;
  peopleVault: boolean | string;
  traditional: boolean | string;
  spreadsheets: boolean | string;
  disconnected: boolean | string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Breadcrumb
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements AfterViewInit {

  /*
  ============================================================
  HERO / PRODUCT OPTIONS
  ============================================================
  */

  comparisonProducts = [
    {
      name: 'PeopleVault',
      subtitle: 'Connected HRMS',
      description:
        'A centralized HRMS for managing employee information and core HR operations.',
      badge: 'Recommended',
      highlighted: true
    },
    {
      name: 'Traditional HR Software',
      subtitle: 'Standard HR Platform',
      description:
        'Core HR capabilities with workflows that may vary by configuration.',
      badge: '',
      highlighted: false
    },
    {
      name: 'Spreadsheet-Based HR',
      subtitle: 'Manual Management',
      description:
        'Employee and HR information managed through spreadsheets and manual processes.',
      badge: '',
      highlighted: false
    },
    {
      name: 'Disconnected Tools',
      subtitle: 'Multiple Systems',
      description:
        'Different HR activities managed across separate applications and tools.',
      badge: '',
      highlighted: false
    }
  ];

  /*
  ============================================================
  COMPARISON FEATURES
  ============================================================
  */

  comparisonFeatures: ComparisonFeature[] = [

    {
      name: 'Employee Management',
      description:
        'Centralized employee profiles, employment information and workforce records.',
      peopleVault: true,
      traditional: true,
      spreadsheets: true,
      disconnected: 'Partial'
    },

    {
      name: 'Attendance Management',
      description:
        'Centralized attendance information and workforce tracking.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'Leave Management',
      description:
        'Leave configuration, requests, balances and approval workflows.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'Payroll',
      description:
        'Salary structures, salary components, deductions and payroll information.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'Company Policies',
      description:
        'Create, publish and manage company policies and employee acknowledgments.',
      peopleVault: true,
      traditional: 'Partial',
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'KYC & Documents',
      description:
        'Maintain employee KYC information and supporting documents.',
      peopleVault: true,
      traditional: 'Partial',
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'Roles & Permissions',
      description:
        'Control what users can access and manage according to their responsibilities.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Limited',
      disconnected: 'Partial'
    },

    {
      name: 'Reports & Analytics',
      description:
        'Access consolidated workforce and HR information through reports.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Manual',
      disconnected: 'Partial'
    },

    {
      name: 'Centralized Workforce Data',
      description:
        'Bring employee and HR information together in one platform.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Limited',
      disconnected: false
    },

    {
      name: 'Connected HR Workflows',
      description:
        'Connect important HR activities within one centralized environment.',
      peopleVault: true,
      traditional: 'Partial',
      spreadsheets: false,
      disconnected: false
    },

    {
      name: 'Scalable for Growing Teams',
      description:
        'Designed to support organizations as their workforce and HR processes grow.',
      peopleVault: true,
      traditional: true,
      spreadsheets: 'Limited',
      disconnected: 'Partial'
    }
  ];

  /*
  ============================================================
  HIGHLIGHTS
  ============================================================
  */

  highlights = [
    {
      icon: 'ph-users-three',
      title: 'One Employee Record',
      description:
        'Keep employee information organized in one centralized environment.'
    },
    {
      icon: 'ph-arrows-clockwise',
      title: 'Connected Workflows',
      description:
        'Bring core HR processes together instead of managing them separately.'
    },
    {
      icon: 'ph-shield-check',
      title: 'Controlled Access',
      description:
        'Manage access according to configured roles and responsibilities.'
    },
    {
      icon: 'ph-chart-line-up',
      title: 'Better Visibility',
      description:
        'Get a consolidated view of workforce information and HR operations.'
    }
  ];

  /*
  ============================================================
  STATS
  ============================================================
  */

  stats = [
    {
      value: '1',
      suffix: '',
      label: 'Centralized Platform'
    },
    {
      value: '8',
      suffix: '+',
      label: 'Core HR Areas'
    },
    {
      value: '1',
      suffix: '',
      label: 'Connected Workforce View'
    },
    {
      value: '24/7',
      suffix: '',
      label: 'Access to HR Information'
    }
  ];

  /*
  ============================================================
  FAQ
  ============================================================
  */

  faqs = [
    {
      question: 'Why compare PeopleVault with spreadsheets?',
      answer:
        'Spreadsheets can be useful for simple record keeping, but PeopleVault is designed to bring employee information and core HR workflows together in one centralized environment.',
      expanded: true
    },

    {
      question: 'Can PeopleVault manage multiple HR processes?',
      answer:
        'Yes. PeopleVault brings employee management, attendance, leave, payroll, policies, KYC and documents, roles and permissions, and reports into one HRMS environment.',
      expanded: false
    },

    {
      question: 'Can different users have different access?',
      answer:
        'Yes. Roles and permissions can be configured so users receive access according to their responsibilities.',
      expanded: false
    },

    {
      question: 'Is PeopleVault suitable for growing organizations?',
      answer:
        'PeopleVault is designed around centralized workforce information and connected HR workflows, making it suitable for organizations looking to organize their HR operations as they grow.',
      expanded: false
    }
  ];

  constructor(
    private animationService: AnimationService
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  /*
  ============================================================
  HELPERS
  ============================================================
  */

  trackByFeature(index: number, feature: ComparisonFeature): string {
    return feature.name;
  }

  isBoolean(value: boolean | string): boolean {
    return typeof value === 'boolean';
  }

  getStatusClass(value: boolean | string): string {

    if (value === true) {
      return 'status-yes';
    }

    if (value === false) {
      return 'status-no';
    }

    return 'status-partial';
  }

  getStatusIcon(value: boolean | string): string {

    if (value === true) {
      return 'ph-check-circle';
    }

    if (value === false) {
      return 'ph-x-circle';
    }

    return 'ph-minus-circle';
  }

  getStatusText(value: boolean | string): string {

    if (value === true) {
      return 'Included';
    }

    if (value === false) {
      return 'Not available';
    }

    return value;
  }
}