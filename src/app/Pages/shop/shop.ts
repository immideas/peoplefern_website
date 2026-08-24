import {
  Component,
  AfterViewInit
} from '@angular/core';

import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    Breadcrumb,
    CommonModule,
    RouterLink
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements AfterViewInit {

  // =========================================================
  // PEOPLEVAULT TERMS & CONDITIONS
  // =========================================================

  termsSections = [

    // -------------------------------------------------------
    // 01 - INTRODUCTION
    // -------------------------------------------------------

    {
      id: 'introduction',
      number: '01',
      label: 'Introduction',

      title: 'Introduction',

      content: `
        <p>
          These Terms & Conditions govern your access to and use of
          PeopleVault websites, applications, HRMS products and related
          services.
        </p>

        <p>
          By accessing, registering for, subscribing to, or using
          PeopleVault services, you acknowledge that you have read,
          understood and agreed to these Terms & Conditions.
        </p>

        <p>
          If you do not agree with these terms, please do not access or
          use the PeopleVault services.
        </p>
      `
    },


    // -------------------------------------------------------
    // 02 - ABOUT PEOPLEVAULT
    // -------------------------------------------------------

    {
      id: 'about-peoplevault',
      number: '02',
      label: 'About PeopleVault',

      title: 'About PeopleVault',

      content: `
        <p>
          PeopleVault is an HRMS and workforce management platform
          designed to help organizations manage employee information,
          HR operations and workforce-related processes through a
          centralized digital environment.
        </p>

        <p>
          Depending on the services enabled for your organization,
          PeopleVault may provide functionality relating to employee
          profiles, attendance, leave, roles, designations, documents,
          permissions, organizational information and other HR-related
          processes.
        </p>
      `
    },


    // -------------------------------------------------------
    // 03 - ACCOUNT & ORGANIZATION
    // -------------------------------------------------------

    {
      id: 'account-organization',
      number: '03',
      label: 'Account & Organization',

      title: 'Account & Organization Information',

      content: `
        <p>
          Organizations using PeopleVault are responsible for providing
          accurate information when creating or configuring their
          PeopleVault account.
        </p>

        <h3>Account Information</h3>

        <p>
          Account information may include organization details,
          administrator information, contact information and other
          information required to configure or operate the service.
        </p>

        <h3>Authorized Users</h3>

        <p>
          Organizations are responsible for determining which employees,
          administrators, managers or other authorized users may access
          PeopleVault.
        </p>

        <p>
          Each authorized user should use their own account credentials
          and should not share login information with unauthorized
          individuals.
        </p>
      `
    },


    // -------------------------------------------------------
    // 04 - ACCEPTABLE USE
    // -------------------------------------------------------

    {
      id: 'acceptable-use',
      number: '04',
      label: 'Acceptable Use',

      title: 'Acceptable Use of PeopleVault',

      content: `
        <p>
          You agree to use PeopleVault only for lawful business and
          workforce-management purposes.
        </p>

        <p>You must not:</p>

        <ul>
          <li>
            Use the service for unlawful, fraudulent or unauthorized
            activities.
          </li>

          <li>
            Attempt to gain unauthorized access to accounts, systems,
            data or infrastructure.
          </li>

          <li>
            Interfere with the availability, security or operation of
            PeopleVault services.
          </li>

          <li>
            Upload malicious software, harmful code or other material
            intended to disrupt the service.
          </li>

          <li>
            Use the service to violate applicable laws or the rights of
            other individuals or organizations.
          </li>
        </ul>
      `
    },


    // -------------------------------------------------------
    // 05 - EMPLOYEE DATA
    // -------------------------------------------------------

    {
      id: 'employee-data',
      number: '05',
      label: 'Employee Data',

      title: 'Employee & Workforce Data',

      content: `
        <p>
          Organizations may use PeopleVault to manage workforce
          information including employee profiles, employment details,
          attendance, leave, roles, designations, documents and other
          HR-related records.
        </p>

        <h3>Organization Responsibility</h3>

        <p>
          The organization using PeopleVault is responsible for ensuring
          that it has the appropriate rights, permissions and lawful
          basis to collect, use and manage employee information through
          the platform.
        </p>

        <h3>Data Accuracy</h3>

        <p>
          Organizations and authorized users are responsible for ensuring
          that information entered into PeopleVault is accurate,
          appropriate and up to date.
        </p>
      `
    },


    // -------------------------------------------------------
    // 06 - USER RESPONSIBILITIES
    // -------------------------------------------------------

    {
      id: 'user-responsibilities',
      number: '06',
      label: 'User Responsibilities',

      title: 'User Responsibilities',

      content: `
        <p>
          Users are responsible for maintaining the confidentiality of
          their account credentials and for activities performed through
          their account.
        </p>

        <ul>
          <li>
            Keep login credentials confidential.
          </li>

          <li>
            Use only accounts and information that you are authorized
            to access.
          </li>

          <li>
            Immediately report suspected unauthorized access or security
            incidents.
          </li>

          <li>
            Keep organization and employee information handled through
            the platform appropriately protected.
          </li>
        </ul>
      `
    },


    // -------------------------------------------------------
    // 07 - SECURITY
    // -------------------------------------------------------

    {
      id: 'security',
      number: '07',
      label: 'Security',

      title: 'Security & Access Control',

      content: `
        <p>
          PeopleVault is designed to support organizations in managing
          workforce information through controlled access and
          permissions.
        </p>

        <p>
          Depending on the configuration of the service, administrators
          may control access to specific workforce information and
          functionality through roles and permissions.
        </p>

        <p>
          Organizations should configure appropriate permissions and
          access levels based on the responsibilities of their users.
        </p>

        <blockquote>
          Security is a shared responsibility between PeopleVault,
          the organization and authorized users.
        </blockquote>
      `
    },


    // -------------------------------------------------------
    // 08 - SERVICE AVAILABILITY
    // -------------------------------------------------------

    {
      id: 'service-availability',
      number: '08',
      label: 'Service Availability',

      title: 'Service Availability',

      content: `
        <p>
          PeopleVault aims to provide reliable access to its services.
          However, availability may occasionally be affected by
          maintenance, upgrades, infrastructure issues, third-party
          services or circumstances outside reasonable control.
        </p>

        <p>
          PeopleVault may perform scheduled or emergency maintenance when
          required to maintain, secure or improve the platform.
        </p>
      `
    },


    // -------------------------------------------------------
    // 09 - THIRD PARTY SERVICES
    // -------------------------------------------------------

    {
      id: 'third-party',
      number: '09',
      label: 'Third-Party Services',

      title: 'Third-Party Services',

      content: `
        <p>
          PeopleVault may integrate with or rely on third-party
          services, infrastructure providers, payment providers,
          communication services or other external technologies.
        </p>

        <p>
          The availability and functionality of third-party services may
          be subject to the terms and policies of those providers.
        </p>

        <p>
          PeopleVault is not responsible for interruptions or changes
          caused solely by third-party services outside its reasonable
          control.
        </p>
      `
    },


    // -------------------------------------------------------
    // 10 - INTELLECTUAL PROPERTY
    // -------------------------------------------------------

    {
      id: 'intellectual-property',
      number: '10',
      label: 'Intellectual Property',

      title: 'Intellectual Property',

      content: `
        <p>
          PeopleVault and its related software, website interfaces,
          designs, branding, logos, content and technology are protected
          by applicable intellectual property laws.
        </p>

        <p>
          Except where expressly permitted, you may not copy, reproduce,
          modify, distribute, reverse engineer or commercially exploit
          PeopleVault materials or technology without appropriate
          authorization.
        </p>
      `
    },


    // -------------------------------------------------------
    // 11 - ORGANIZATION CONTENT
    // -------------------------------------------------------

    {
      id: 'organization-content',
      number: '11',
      label: 'Organization Content',

      title: 'Organization Content & Data',

      content: `
        <p>
          Organizations retain responsibility for the information and
          content they provide through PeopleVault.
        </p>

        <p>
          You represent that you have the necessary rights and
          permissions to provide such information and to use it in
          connection with PeopleVault services.
        </p>

        <p>
          PeopleVault does not claim ownership of organization-owned
          employee or workforce information merely because it is stored
          or processed through the platform.
        </p>
      `
    },


    // -------------------------------------------------------
    // 12 - PAYMENTS & SUBSCRIPTIONS
    // -------------------------------------------------------

    {
      id: 'payments',
      number: '12',
      label: 'Payments & Subscriptions',

      title: 'Payments & Subscriptions',

      content: `
        <p>
          Certain PeopleVault services or features may be available
          through paid subscriptions or commercial agreements.
        </p>

        <p>
          Where applicable, pricing, billing frequency, subscription
          terms and payment conditions will be communicated during the
          applicable purchase or subscription process.
        </p>

        <p>
          Organizations are responsible for providing accurate billing
          information and maintaining valid payment arrangements where
          required.
        </p>
      `
    },


    // -------------------------------------------------------
    // 13 - SUSPENSION
    // -------------------------------------------------------

    {
      id: 'suspension',
      number: '13',
      label: 'Suspension & Termination',

      title: 'Suspension & Termination',

      content: `
        <p>
          PeopleVault may restrict, suspend or terminate access to
          services where reasonably necessary, including in cases of
          serious misuse, security concerns, violation of these terms,
          unlawful activity or non-payment where applicable.
        </p>

        <p>
          Organizations may also discontinue their use of PeopleVault
          subject to their applicable subscription or service agreement.
        </p>
      `
    },


    // -------------------------------------------------------
    // 14 - DISCLAIMER
    // -------------------------------------------------------

    {
      id: 'disclaimer',
      number: '14',
      label: 'Disclaimer',

      title: 'Disclaimer',

      content: `
        <p>
          PeopleVault provides HRMS and workforce-management tools to
          support organizations in managing their HR operations.
        </p>

        <p>
          PeopleVault does not replace an organization's legal,
          financial, tax, employment or professional advice.
        </p>

        <p>
          Organizations remain responsible for their own HR policies,
          employment practices, statutory obligations and compliance
          requirements.
        </p>
      `
    },


    // -------------------------------------------------------
    // 15 - LIMITATION OF LIABILITY
    // -------------------------------------------------------

    {
      id: 'limitation',
      number: '15',
      label: 'Limitation of Liability',

      title: 'Limitation of Liability',

      content: `
        <p>
          To the extent permitted by applicable law, PeopleVault will
          not be responsible for indirect, incidental, special or
          consequential losses arising from the use of the service.
        </p>

        <p>
          Nothing in these Terms & Conditions is intended to exclude or
          limit liability where such exclusion or limitation is not
          permitted under applicable law.
        </p>
      `
    },


    // -------------------------------------------------------
    // 16 - CHANGES TO TERMS
    // -------------------------------------------------------

    {
      id: 'changes',
      number: '16',
      label: 'Changes to Terms',

      title: 'Changes to These Terms',

      content: `
        <p>
          PeopleVault may update these Terms & Conditions from time to
          time to reflect changes to the services, technology, legal
          requirements or business practices.
        </p>

        <p>
          Updated terms will be made available through the applicable
          PeopleVault website or service.
        </p>

        <p>
          Continued use of the services after an applicable update may
          constitute acceptance of the revised terms, subject to
          applicable law.
        </p>
      `
    },


    // -------------------------------------------------------
    // 17 - CONTACT
    // -------------------------------------------------------

    {
      id: 'contact',
      number: '17',
      label: 'Contact PeopleVault',

      title: 'Contact PeopleVault',

      content: `
        <p>
          If you have questions about these Terms & Conditions or about
          the PeopleVault services, please contact the PeopleVault team
          through the official contact channels provided on our website.
        </p>

        <p>
          We encourage organizations and users to contact us when they
          require clarification regarding the use of the platform or
          these terms.
        </p>
      `
    }

  ];


  // =========================================================
  // IMPORTANT TERMS
  // =========================================================

  importantTerms = [
    {
      icon: 'ph-bold ph-shield-check',
      title: 'Use Responsibly',
      description:
        'Use PeopleVault only for authorized and lawful HR and workforce-management activities.'
    },

    {
      icon: 'ph-bold ph-lock-key',
      title: 'Protect Credentials',
      description:
        'Keep account credentials secure and report suspected unauthorized access.'
    },

    {
      icon: 'ph-bold ph-users-three',
      title: 'Manage Access',
      description:
        'Organizations are responsible for assigning appropriate access and permissions to users.'
    },

    {
      icon: 'ph-bold ph-database',
      title: 'Protect Workforce Data',
      description:
        'Handle employee and organizational information responsibly and according to applicable requirements.'
    }
  ];


  // =========================================================
  // POPULAR TERMS / TOPICS
  // =========================================================

  tags2 = [
    {
      label: 'PeopleVault HRMS',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'User Accounts',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Employee Data',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Access Control',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },

    {
      label: 'Security',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'HRMS',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Subscriptions',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Organization Data',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }
  ];


  // =========================================================
  // LAST UPDATED
  // =========================================================

  lastUpdated = 'August 2026';


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
  // TRACK BY
  // =========================================================

  trackBySection(
    index: number,
    section: { id: string }
  ): string {
    return section.id;
  }


  // =========================================================
  // TRACK BY IMPORTANT TERMS
  // =========================================================

  trackByImportantTerm(
    index: number,
    item: { title: string }
  ): string {
    return item.title;
  }


  // =========================================================
  // TRACK BY TAG
  // =========================================================

  trackByTag(
    index: number,
    tag: { label: string }
  ): string {
    return tag.label;
  }

}