import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    Breadcrumb,
    CommonModule,
    RouterLink
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails implements AfterViewInit {

  /* =========================================================
     CASE STUDY
  ========================================================= */

  caseStudy = {
    category: 'Customer Success Story',

    title: 'From Fragmented HR Operations to One Connected Platform',

    subtitle:
      'How PeopleVault helps organizations centralize employee information, streamline HR workflows and create better workforce visibility.',

    company: '[Customer Name]',

    industry: '[Industry]',

    workforce: '[Workforce Size]',

    locations: '[Number of Locations]',

    implementation: '[Implementation Timeline]',

    image: 'assets/images/thumbs/project-details-img1.png',

    challenge: {
      title: 'The HR Challenge',

      description:
        'The organization was managing important HR information across spreadsheets, shared drives and disconnected processes. Employee records were difficult to maintain, leave approvals were handled through informal communication, and payroll information required manual reconciliation.',

      points: [
        'Employee records were distributed across multiple files and systems.',
        'Leave requests and approvals depended on manual communication.',
        'HR teams spent additional time searching for workforce information.',
        'Payroll-related information required manual reconciliation.',
        'Leadership had limited centralized visibility into HR operations.'
      ]
    },

    existingProcess: {
      title: 'Before PeopleVault',

      description:
        'The existing HR process depended heavily on spreadsheets, email-based communication and separate systems for different workforce activities.',

      points: [
        'Manual employee record management',
        'Spreadsheet-based HR information',
        'Email-based leave approvals',
        'Disconnected attendance and payroll information',
        'Limited centralized workforce reporting'
      ]
    },

    solution: {
      title: 'The PeopleVault Solution',

      description:
        'PeopleVault brought employee information and core HR operations into one connected environment. The organization could structure employee records, configure HR workflows and provide authorized users with a consistent view of workforce information.',

      points: [
        'Centralized employee management',
        'Structured attendance workflows',
        'Configured leave requests and approvals',
        'Organized payroll information',
        'Company policy management',
        'Role-based access and permissions',
        'Centralized HR reports and dashboards'
      ]
    },

    implementationDetails: [
      {
        number: '01',
        title: 'Data Preparation',
        description:
          'Existing employee and HR information was reviewed and prepared for migration into the centralized platform.'
      },
      {
        number: '02',
        title: 'Platform Configuration',
        description:
          'HR settings, roles, permissions and operational workflows were configured according to organizational requirements.'
      },
      {
        number: '03',
        title: 'Module Setup',
        description:
          'Employee management, attendance, leave and other required HR modules were configured for the organization.'
      },
      {
        number: '04',
        title: 'Team Enablement',
        description:
          'Administrators and relevant users were introduced to the new workflows before the organization moved to the centralized process.'
      }
    ],

    results: [
      {
        icon: 'ph ph-database',
        value: 'Centralized',
        label: 'Employee Information',
        description:
          'Workforce information managed through one structured environment.'
      },
      {
        icon: 'ph ph-arrows-clockwise',
        value: 'Connected',
        label: 'HR Workflows',
        description:
          'Core HR activities organized through connected workflows.'
      },
      {
        icon: 'ph ph-chart-line-up',
        value: 'Better',
        label: 'Workforce Visibility',
        description:
          'Dashboards and reports provide a clearer view of HR operations.'
      },
      {
        icon: 'ph ph-shield-check',
        value: 'Controlled',
        label: 'Access',
        description:
          'Role-based permissions help control access to HR information.'
      }
    ],

    quote: {
      text:
        '[Insert genuine, customer-approved testimonial before publishing.]',

      name: '[Customer Name]',

      role: '[Job Title]',

      company: '[Company Name]'
    }
  };


  /* =========================================================
     PEOPLEVAULT MODULES USED
  ========================================================= */

  modules = [
    {
      icon: 'ph ph-users-three',
      title: 'Employee Management',
      description:
        'Centralized employee profiles and workforce records.'
    },
    {
      icon: 'ph ph-calendar-check',
      title: 'Attendance',
      description:
        'Organized attendance and work-related information.'
    },
    {
      icon: 'ph ph-calendar-blank',
      title: 'Leave Management',
      description:
        'Structured leave requests and approval workflows.'
    },
    {
      icon: 'ph ph-money',
      title: 'Payroll',
      description:
        'Organized salary and payroll-related information.'
    },
    {
      icon: 'ph ph-file-text',
      title: 'Company Policies',
      description:
        'Policy documents, versions and acknowledgments.'
    },
    {
      icon: 'ph ph-lock-key',
      title: 'Roles & Permissions',
      description:
        'Role-based access to HR modules and actions.'
    },
    {
      icon: 'ph ph-chart-bar',
      title: 'Reports & Analytics',
      description:
        'Centralized workforce dashboards and reports.'
    }
  ];


  /* =========================================================
     CASE STUDY TAGS
  ========================================================= */

  tags = [
    'Employee Management',
    'Attendance',
    'Leave Management',
    'Payroll',
    'Company Policies',
    'Roles & Permissions',
    'Reports & Analytics'
  ];


  /* =========================================================
     RELATED CASE STUDIES
  ========================================================= */

  relatedStudies = [
    {
      image: 'assets/images/thumbs/project-details-img3.png',
      category: 'HR Operations',
      title: 'Centralizing Employee Information',
      description:
        'A structured approach to managing employee records and workforce information.'
    },
    {
      image: 'assets/images/thumbs/project-details-img4.png',
      category: 'Workforce Management',
      title: 'Simplifying Leave & Attendance',
      description:
        'Connecting attendance and leave workflows for better operational visibility.'
    }
  ];


  constructor(
    private animationService: AnimationService
  ) {}


  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

}