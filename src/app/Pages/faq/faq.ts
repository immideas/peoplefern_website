import {
  AfterViewInit,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AnimationService } from '../../services/animation';


interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: string;
  show: boolean;
}


@Component({
  selector: 'app-faq',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './faq.html',
  styleUrl: './faq.css'
})

export class Faq implements AfterViewInit {


  // =========================================================
  // SEARCH
  // =========================================================

  searchTerm: string = '';


  popularSearches = [
    'HRMS',
    'Employee Records',
    'Attendance',
    'Leave',
    'Payroll',
    'Security'
  ];


  // =========================================================
  // FAQ SECTION 1
  // PEOPLEVAULT & HRMS
  // =========================================================

  faqs: FaqItem[] = [

    {
      id: 'collapseOne',

      category: 'Getting Started',

      icon: 'ph ph-buildings',

      question: 'What is PeopleVault HRMS?',

      answer:
        'PeopleVault is a centralized Human Resource Management System designed to help organizations manage employee information and everyday HR operations from one structured platform. It brings employee records, organizational information, attendance, leave, payroll-related processes and workforce administration together so HR teams can work with consistent and organized information.',

      show: true
    },


    {
      id: 'collapseTwo',

      category: 'HRMS',

      icon: 'ph ph-users-three',

      question: 'Who can use PeopleVault?',

      answer:
        'PeopleVault is designed for organizations that want a structured way to manage employees and HR operations. HR administrators, authorized managers and employees can use different areas of the platform depending on the permissions and responsibilities assigned to them.',

      show: false
    },


    {
      id: 'collapseThree',

      category: 'Employee Management',

      icon: 'ph ph-identification-card',

      question: 'What employee information can be managed in PeopleVault?',

      answer:
        'Organizations can maintain structured employee profiles containing relevant workforce information such as personal details, employment information, departments, designations, reporting relationships, documents and other HR-related records supported by the configured system.',

      show: false
    },


    {
      id: 'collapseFour',

      category: 'Organization',

      icon: 'ph ph-tree-structure',

      question: 'Can PeopleVault manage departments and designations?',

      answer:
        'Yes. PeopleVault can help organizations structure workforce information around departments, designations, roles and reporting relationships. This creates a clearer organizational structure and helps HR teams maintain consistent employee records.',

      show: false
    },


    {
      id: 'collapseFive',

      category: 'Employee Records',

      icon: 'ph ph-folder-open',

      question: 'Can employee documents be maintained digitally?',

      answer:
        'PeopleVault can support centralized employee information and document management so authorized users can maintain relevant workforce records in a structured digital environment instead of depending entirely on disconnected files and spreadsheets.',

      show: false
    },


    {
      id: 'collapseSix',

      category: 'Access',

      icon: 'ph ph-user-circle',

      question: 'Can employees access their own information?',

      answer:
        'Employee access can be provided according to the features and permissions configured by the organization. This can allow employees to interact with relevant HR information and supported self-service processes without requiring HR teams to manually handle every routine request.',

      show: false
    },


    {
      id: 'collapseSeven',

      category: 'Administration',

      icon: 'ph ph-gear-six',

      question: 'Can administrators control what users can access?',

      answer:
        'Yes. PeopleVault is designed around controlled access to HR information. Administrators can use roles and permissions to determine which areas and actions are available to different users according to organizational responsibilities.',

      show: false
    },


    {
      id: 'collapseEight',

      category: 'Implementation',

      icon: 'ph ph-rocket-launch',

      question: 'How can an organization get started with PeopleVault?',

      answer:
        'Organizations can begin by discussing their HR requirements, workforce structure and operational needs with the PeopleVault team. A product demonstration can then help stakeholders understand the platform and determine how it fits their HR processes.',

      show: false
    }

  ];


  // =========================================================
  // FAQ SECTION 2
  // FEATURES, SECURITY & SUPPORT
  // =========================================================

  faqsTwo: FaqItem[] = [

    {
      id: 'collapseOneTwo',

      category: 'Attendance',

      icon: 'ph ph-clock',

      question: 'How does PeopleVault help with attendance management?',

      answer:
        'PeopleVault can help organizations organize attendance-related information in a centralized HR environment. This gives HR teams and authorized managers a more structured way to review workforce attendance information instead of maintaining disconnected records.',

      show: true
    },


    {
      id: 'collapseTwoTwo',

      category: 'Leave',

      icon: 'ph ph-calendar-check',

      question: 'Can employees submit leave requests through PeopleVault?',

      answer:
        'Where leave management is enabled, employees can use the configured workflow to submit leave requests while authorized managers or HR users can review and process those requests according to the organization’s leave policies and approval structure.',

      show: false
    },


    {
      id: 'collapseThreeTwo',

      category: 'Payroll',

      icon: 'ph ph-wallet',

      question: 'Does PeopleVault support payroll-related HR processes?',

      answer:
        'PeopleVault can support payroll-related workforce processes and information depending on the modules and configuration used by the organization. This helps reduce fragmentation between employee information and payroll administration.',

      show: false
    },


    {
      id: 'collapseFourTwo',

      category: 'Security',

      icon: 'ph ph-shield-check',

      question: 'How does PeopleVault protect HR information?',

      answer:
        'PeopleVault uses controlled application access and role-based permissions to help organizations limit access to HR information. Organizations should configure permissions carefully so employees, managers and administrators only have access appropriate to their responsibilities.',

      show: false
    },


    {
      id: 'collapseFiveTwo',

      category: 'Permissions',

      icon: 'ph ph-lock-key',

      question: 'What is role-based access in PeopleVault?',

      answer:
        'Role-based access allows organizations to control system functionality according to a user’s role and responsibilities. For example, an employee, reporting manager and HR administrator may each receive different levels of access to workforce information and administrative actions.',

      show: false
    },


    {
      id: 'collapseSixTwo',

      category: 'Data Management',

      icon: 'ph ph-database',

      question: 'Why is centralized HR data useful?',

      answer:
        'Centralized HR information reduces dependency on scattered spreadsheets, documents and disconnected records. It gives authorized users a more consistent source of workforce information and can make everyday HR administration easier to manage.',

      show: false
    },


    {
      id: 'collapseSevenTwo',

      category: 'Support',

      icon: 'ph ph-headset',

      question: 'Where can I get help if I have a question about PeopleVault?',

      answer:
        'You can visit the PeopleVault Help Center for product guidance and commonly requested information. For organization-specific assistance, you can also contact the PeopleVault support team through the available support channels.',

      show: false
    },


    {
      id: 'collapseEightTwo',

      category: 'Demo',

      icon: 'ph ph-presentation-chart',

      question: 'Can I see PeopleVault before choosing it for my organization?',

      answer:
        'Yes. You can request a PeopleVault product demonstration to explore the platform, understand key HR workflows and discuss how the system could support your organization’s workforce management requirements.',

      show: false
    }

  ];


  // =========================================================
  // CTA TOPICS
  // =========================================================

  tags2 = [

    {
      label: 'Employee Management',
      icon: 'ph ph-users-three',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Attendance',
      icon: 'ph ph-clock',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Leave Management',
      icon: 'ph ph-calendar-check',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Payroll',
      icon: 'ph ph-wallet',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },

    {
      label: 'HR Operations',
      icon: 'ph ph-briefcase',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'Employee Records',
      icon: 'ph ph-identification-card',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Roles & Permissions',
      icon: 'ph ph-lock-key',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'Data Security',
      icon: 'ph ph-shield-check',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    },

    {
      label: 'HR Technology',
      icon: 'ph ph-desktop',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Workforce Management',
      icon: 'ph ph-buildings',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    }

  ];


  // =========================================================
  // BENEFITS
  // =========================================================

  faqBenefits = [

    {
      icon: 'ph ph-magnifying-glass',
      title: 'Find Answers Faster',
      description:
        'Search common PeopleVault questions and quickly find information about HRMS features and workflows.'
    },

    {
      icon: 'ph ph-book-open-text',
      title: 'Understand PeopleVault',
      description:
        'Learn how employee management, attendance, leave and other HR processes work within PeopleVault.'
    },

    {
      icon: 'ph ph-headset',
      title: 'Need More Help?',
      description:
        'Visit our Help Center or contact our team when you need additional assistance.'
    }

  ];


  // =========================================================
  // SEARCH RESULTS
  // =========================================================

  filteredFaqs: FaqItem[] = [...this.faqs];

  filteredFaqsTwo: FaqItem[] = [...this.faqsTwo];


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService
  ) {}


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {

    this.animationService.initAnimations();

  }


  // =========================================================
  // SEARCH FAQ
  // =========================================================

  searchFaq(): void {

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();


    if (!search) {

      this.resetSearch();

      return;

    }


    this.filteredFaqs = this.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search)
    );


    this.filteredFaqsTwo = this.faqsTwo.filter(
      faq =>
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search)
    );

  }


  // =========================================================
  // POPULAR SEARCH
  // =========================================================

  selectPopularSearch(term: string): void {

    this.searchTerm = term;

    this.searchFaq();

    setTimeout(() => {

      document
        .getElementById('faq-results')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

    }, 100);

  }


  // =========================================================
  // RESET SEARCH
  // =========================================================

  resetSearch(): void {

    this.searchTerm = '';

    this.filteredFaqs = [...this.faqs];

    this.filteredFaqsTwo = [...this.faqsTwo];

  }


  // =========================================================
  // RESULT COUNT
  // =========================================================

  get totalResults(): number {

    return (
      this.filteredFaqs.length +
      this.filteredFaqsTwo.length
    );

  }

}