import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './help-center.html',
  styleUrl: './help-center.css'
})
export class HelpCenter implements AfterViewInit {

  // =========================================================
  // HELP CENTER CATEGORIES
  // =========================================================

  helpCategories = [
    {
      id: 'gettingStarted',
      title: 'Getting Started',
      description:
        'Set up your organization, account, login and initial HR configuration.',
      icon: 'ph ph-rocket-launch',
      colorClass: 'help-icon-blue'
    },

    {
      id: 'employeeManagement',
      title: 'Employee Management',
      description:
        'Manage employee profiles, roles, designations, KYC and documents.',
      icon: 'ph ph-users-three',
      colorClass: 'help-icon-purple'
    },

    {
      id: 'attendanceLeave',
      title: 'Attendance & Leave',
      description:
        'Manage attendance, shifts, work hours, leave requests and approvals.',
      icon: 'ph ph-calendar-check',
      colorClass: 'help-icon-green'
    },

    {
      id: 'payroll',
      title: 'Payroll',
      description:
        'Manage salary, salary components, deductions and payroll workflows.',
      icon: 'ph ph-money',
      colorClass: 'help-icon-orange'
    },

    {
      id: 'policies',
      title: 'Policies',
      description:
        'Create policies, upload documents, manage versions and acknowledgments.',
      icon: 'ph ph-notebook',
      colorClass: 'help-icon-pink'
    },

    {
      id: 'permissions',
      title: 'Permissions',
      description:
        'Manage roles, permissions and module-level access.',
      icon: 'ph ph-shield-check',
      colorClass: 'help-icon-indigo'
    },

    {
      id: 'subscription',
      title: 'Subscription & Payments',
      description:
        'Understand plans, payments, activation, renewal and subscription status.',
      icon: 'ph ph-credit-card',
      colorClass: 'help-icon-yellow'
    },

    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description:
        'Find solutions for login issues, access problems and common errors.',
      icon: 'ph ph-wrench',
      colorClass: 'help-icon-red'
    }
  ];


  // =========================================================
  // HELP ARTICLES
  // =========================================================

  helpArticles = [

    {
      category: 'Getting Started',

      questions: [

        {
          id: 'gettingStartedOne',
          question: 'How do I get started with PeopleVault?',
          answer:
            'Start by setting up your organization, configuring the required HR settings and creating the appropriate administrator and employee records.'
        },

        {
          id: 'gettingStartedTwo',
          question: 'How do I set up my organization?',
          answer:
            'Configure your organization profile and the core HR settings required for your workforce operations.'
        },

        {
          id: 'gettingStartedThree',
          question: 'How do I log in to PeopleVault?',
          answer:
            'Use your registered PeopleVault account credentials to access the platform.'
        },

        {
          id: 'gettingStartedFour',
          question: 'What should I configure first?',
          answer:
            'Start with your organization profile, users, roles, permissions and core HR settings before adding employee records.'
        }

      ]

    },


    {
      category: 'Employee Management',

      questions: [

        {
          id: 'employeeOne',
          question: 'How do I create an employee?',
          answer:
            'Create an employee record and enter the required personal, employment, role and designation information according to your configured workflow.'
        },

        {
          id: 'employeeTwo',
          question: 'Can I manage employee profiles?',
          answer:
            'Yes. Employee profiles can be maintained through the configured employee management workflows.'
        },

        {
          id: 'employeeThree',
          question: 'Can I manage employee KYC and documents?',
          answer:
            'Applicable employee KYC and supporting documents can be maintained through the configured employee workflow.'
        },

        {
          id: 'employeeFour',
          question: 'Can employee roles and designations be updated?',
          answer:
            'Yes. Employee role and designation information can be maintained according to the permissions assigned to your account.'
        }

      ]

    },


    {
      category: 'Attendance & Leave',

      questions: [

        {
          id: 'attendanceOne',
          question: 'How does attendance management work?',
          answer:
            'PeopleVault provides centralized attendance and work-related workflows for HR teams and authorized managers.'
        },

        {
          id: 'attendanceTwo',
          question: 'Can employees submit leave requests?',
          answer:
            'Yes. Employees can submit leave requests through the configured leave workflow.'
        },

        {
          id: 'attendanceThree',
          question: 'How are leave requests approved?',
          answer:
            'Leave requests can be reviewed and approved according to the configured approval workflow and assigned permissions.'
        },

        {
          id: 'attendanceFour',
          question: 'Can HR manage work hours and shifts?',
          answer:
            'Attendance-related work hours and shift information can be managed according to the configured workforce workflow.'
        }

      ]

    },


    {
      category: 'Payroll',

      questions: [

        {
          id: 'payrollOne',
          question: 'Can I manage salary information?',
          answer:
            'Yes. Salary information, salary components and deductions can be managed according to the implemented payroll configuration.'
        },

        {
          id: 'payrollTwo',
          question: 'Who can access payroll information?',
          answer:
            'Payroll access is controlled according to configured roles and permissions.'
        },

        {
          id: 'payrollThree',
          question: 'Can salary components be configured?',
          answer:
            'Salary components can be managed according to the payroll configuration implemented for your organization.'
        }

      ]

    },


    {
      category: 'Policies',

      questions: [

        {
          id: 'policyOne',
          question: 'Can I create company policies?',
          answer:
            'Yes. Administrators can create and publish company policies according to the configured policy workflow.'
        },

        {
          id: 'policyTwo',
          question: 'Can policies have different versions?',
          answer:
            'Yes. Policy documents and versions can be maintained through the configured policy management workflow.'
        },

        {
          id: 'policyThree',
          question: 'Can employees acknowledge policies?',
          answer:
            'Yes. Employee acknowledgment can be captured for applicable company policies.'
        }

      ]

    },


    {
      category: 'Permissions',

      questions: [

        {
          id: 'permissionOne',
          question: 'How are permissions managed?',
          answer:
            'Access is controlled through roles and permissions so users receive access according to their responsibilities.'
        },

        {
          id: 'permissionTwo',
          question: 'Why can I not access a particular module?',
          answer:
            'Your access may depend on the role and permissions assigned to your account. Contact an authorized administrator if you believe your access is incorrect.'
        },

        {
          id: 'permissionThree',
          question: 'Can different users have different access?',
          answer:
            'Yes. Access can be controlled according to the roles and permissions assigned to each user.'
        }

      ]

    },


    {
      category: 'Subscription & Payments',

      questions: [

        {
          id: 'subscriptionOne',
          question: 'Where can I check my subscription?',
          answer:
            'Subscription status and applicable plan information can be reviewed through the configured subscription workflow.'
        },

        {
          id: 'subscriptionTwo',
          question: 'What happens when my subscription expires?',
          answer:
            'Access is validated according to the subscription status and applicable platform rules.'
        },

        {
          id: 'subscriptionThree',
          question: 'Can I change my plan?',
          answer:
            'Plan changes can be supported according to the implemented subscription workflow.'
        }

      ]

    },


    {
      category: 'Troubleshooting',

      questions: [

        {
          id: 'troubleshootingOne',
          question: 'I am unable to log in. What should I do?',
          answer:
            'Verify your registered credentials first. If the issue continues, contact the PeopleVault support team or your authorized administrator.'
        },

        {
          id: 'troubleshootingTwo',
          question: 'Why can I not see a particular feature?',
          answer:
            'Feature visibility can depend on your assigned role, permissions and subscription configuration.'
        },

        {
          id: 'troubleshootingThree',
          question: 'Where can I get additional support?',
          answer:
            'If the Help Center does not resolve your question, contact the PeopleVault team for further assistance.'
        }

      ]

    }

  ];


  // =========================================================
  // POPULAR GUIDES
  // =========================================================

  popularGuides = [

    {
      title: 'How to get started with PeopleVault',
      category: 'Getting Started',
      icon: 'ph ph-rocket-launch'
    },

    {
      title: 'How to create an employee',
      category: 'Employee Management',
      icon: 'ph ph-user-plus'
    },

    {
      title: 'How attendance management works',
      category: 'Attendance & Leave',
      icon: 'ph ph-calendar-check'
    },

    {
      title: 'How leave approval works',
      category: 'Attendance & Leave',
      icon: 'ph ph-calendar-plus'
    },

    {
      title: 'Understanding roles and permissions',
      category: 'Permissions',
      icon: 'ph ph-shield-check'
    },

    {
      title: 'Managing salary information',
      category: 'Payroll',
      icon: 'ph ph-money'
    }

  ];


  // =========================================================
  // SEARCH
  // =========================================================

  searchTerm = '';

  filteredArticles = this.helpArticles;


  // =========================================================
  // TAGS
  // =========================================================

  tags2 = [

    {
      label: 'HRMS',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Employee Management',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Attendance',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Leave Management',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },

    {
      label: 'Payroll',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'Policies',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Permissions',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Security',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }

  ];


  // =========================================================
  // SEARCH HELP
  // =========================================================

  searchHelp(): void {

    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {

      this.filteredArticles = this.helpArticles;

      return;
    }

    this.filteredArticles = this.helpArticles

      .map(section => ({

        ...section,

        questions: section.questions.filter(item =>

          item.question.toLowerCase().includes(term) ||

          item.answer.toLowerCase().includes(term)

        )

      }))

      .filter(section => section.questions.length > 0);

  }


  // =========================================================
  // CATEGORY SEARCH
  // =========================================================

  searchCategory(category: string): void {

    this.searchTerm = category;

    this.filteredArticles = this.helpArticles.filter(

      section => section.category === category

    );

    setTimeout(() => {

      document
        .getElementById('help-guides')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

    }, 100);

  }


  // =========================================================
  // POPULAR GUIDE
  // =========================================================

  openPopularGuide(category: string): void {

    this.searchCategory(category);

  }


  // =========================================================
  // RESET SEARCH
  // =========================================================

  clearSearch(): void {

    this.searchTerm = '';

    this.filteredArticles = this.helpArticles;

  }


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {

    this.animationService.initAnimations();

  }


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService
  ) {}

}