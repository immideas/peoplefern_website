import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop-details.html',
  styleUrl: './shop-details.css'
})
export class ShopDetails implements AfterViewInit {

  // =========================================================
  // EULA HEADER INFORMATION
  // =========================================================

  eula = {
    badge: 'PEOPLEVAULT LEGAL',
    title: 'End User License Agreement',
    shortTitle: 'PeopleVault EULA',
    description:
      'This End User License Agreement explains the terms and conditions that apply when you access, install, use, or interact with PeopleVault HRMS and its related services.',
    version: 'Version 1.0',
    effectiveDate: 'August 21, 2026',
    lastUpdated: 'August 21, 2026'
  };


  // =========================================================
  // EULA QUICK INFORMATION
  // =========================================================

  legalHighlights = [
    {
      icon: 'ph-bold ph-file-text',
      title: 'Software License',
      text:
        'Defines the limited rights granted to authorized users to access and use PeopleVault.'
    },
    {
      icon: 'ph-bold ph-shield-check',
      title: 'Secure Usage',
      text:
        'Users are expected to protect account credentials and use the platform responsibly.'
    },
    {
      icon: 'ph-bold ph-user-circle',
      title: 'Authorized Users',
      text:
        'Access is intended for users who are authorized by their organization or account administrator.'
    },
    {
      icon: 'ph-bold ph-warning-circle',
      title: 'Acceptable Use',
      text:
        'Users must not misuse, disrupt, reverse engineer, or attempt to compromise the platform.'
    }
  ];


  // =========================================================
  // EULA NAVIGATION
  // =========================================================

  sections = [
    {
      id: 'acceptance',
      number: '01',
      title: 'Acceptance of Agreement'
    },
    {
      id: 'license',
      number: '02',
      title: 'License Grant'
    },
    {
      id: 'user-responsibilities',
      number: '03',
      title: 'User Responsibilities'
    },
    {
      id: 'account-security',
      number: '04',
      title: 'Account & Security'
    },
    {
      id: 'acceptable-use',
      number: '05',
      title: 'Acceptable Use'
    },
    {
      id: 'intellectual-property',
      number: '06',
      title: 'Intellectual Property'
    },
    {
      id: 'data-privacy',
      number: '07',
      title: 'Data & Privacy'
    },
    {
      id: 'third-party',
      number: '08',
      title: 'Third-Party Services'
    },
    {
      id: 'availability',
      number: '09',
      title: 'Service Availability'
    },
    {
      id: 'termination',
      number: '10',
      title: 'Termination'
    },
    {
      id: 'disclaimer',
      number: '11',
      title: 'Disclaimer'
    },
    {
      id: 'liability',
      number: '12',
      title: 'Limitation of Liability'
    },
    {
      id: 'changes',
      number: '13',
      title: 'Changes to EULA'
    },
    {
      id: 'contact',
      number: '14',
      title: 'Contact Information'
    }
  ];


  // =========================================================
  // EULA CONTENT
  // =========================================================

  eulaSections = [

    {
      id: 'acceptance',
      number: '01',
      label: 'AGREEMENT',
      title: 'Acceptance of Agreement',

      paragraphs: [
        'By accessing or using PeopleVault HRMS, you acknowledge that you have read, understood, and agree to be bound by this End User License Agreement.',
        'If you are accessing PeopleVault on behalf of an organization, you confirm that you have the appropriate authority to accept these terms on behalf of that organization.',
        'If you do not agree with these terms, you should not access or use the PeopleVault platform.'
      ],

      bullets: [
        'You agree to use the platform only for legitimate business and workforce management purposes.',
        'You are responsible for ensuring that your use of PeopleVault complies with applicable organizational policies.',
        'Your continued use of the platform after changes to this agreement may constitute acceptance of the updated terms.'
      ]
    },


    {
      id: 'license',
      number: '02',
      label: 'LICENSE',
      title: 'License Grant',

      paragraphs: [
        'Subject to your compliance with this EULA and any applicable subscription or service agreement, PeopleVault grants you a limited, non-exclusive, non-transferable and revocable right to access and use the platform.',
        'The license is provided for authorized organizational and workforce management activities and does not transfer ownership of the software or its underlying intellectual property to you.'
      ],

      bullets: [
        'Access the platform using authorized credentials.',
        'Use available HRMS functionality according to your organization’s subscription.',
        'Allow authorized employees or administrators to use the services according to their assigned permissions.',
        'Use documentation and product resources for legitimate internal purposes.'
      ]
    },


    {
      id: 'user-responsibilities',
      number: '03',
      label: 'RESPONSIBILITIES',
      title: 'User Responsibilities',

      paragraphs: [
        'Users are responsible for using PeopleVault in a responsible manner and for maintaining the accuracy of information submitted through the platform.',
        'Organizations are responsible for determining appropriate user roles, permissions and access levels within their PeopleVault environment.'
      ],

      bullets: [
        'Provide accurate information where required.',
        'Maintain appropriate administrative controls.',
        'Use the system according to internal HR and security policies.',
        'Promptly report suspected unauthorized access or security incidents.',
        'Avoid sharing confidential account credentials with unauthorized individuals.'
      ]
    },


    {
      id: 'account-security',
      number: '04',
      label: 'SECURITY',
      title: 'Account & Security',

      paragraphs: [
        'PeopleVault may provide authentication, authorization and permission-management capabilities to help organizations control access to workforce information.',
        'Users and administrators are responsible for protecting their login credentials and for taking reasonable steps to prevent unauthorized access.'
      ],

      bullets: [
        'Keep usernames, passwords and authentication information confidential.',
        'Use strong and appropriate authentication credentials.',
        'Do not intentionally provide account access to unauthorized persons.',
        'Notify the appropriate administrator if suspicious activity is detected.',
        'Review assigned permissions regularly where administrative functionality is available.'
      ]
    },


    {
      id: 'acceptable-use',
      number: '05',
      label: 'USAGE',
      title: 'Acceptable Use',

      paragraphs: [
        'PeopleVault must be used only for lawful and authorized purposes. Users must not attempt to interfere with the operation, security or availability of the platform.'
      ],

      bullets: [
        'Do not attempt to gain unauthorized access to accounts or systems.',
        'Do not introduce malicious software, harmful code or other destructive content.',
        'Do not intentionally overload, disrupt or interfere with platform services.',
        'Do not reverse engineer, decompile or attempt to extract source code except where expressly permitted by applicable law.',
        'Do not copy, reproduce or redistribute protected platform materials without authorization.',
        'Do not use the platform for fraudulent, abusive or unlawful activities.'
      ]
    },


    {
      id: 'intellectual-property',
      number: '06',
      label: 'OWNERSHIP',
      title: 'Intellectual Property',

      paragraphs: [
        'PeopleVault and its licensors retain all rights, title and interest in the software, platform design, documentation, branding, visual elements, technology and other materials provided as part of the service.',
        'This EULA grants a right to use the platform but does not transfer ownership of any PeopleVault intellectual property.'
      ],

      bullets: [
        'PeopleVault trademarks and branding remain the property of their respective owners.',
        'Software and platform technology remain protected intellectual property.',
        'Users may not represent PeopleVault technology as their own.',
        'Unauthorized copying or redistribution of platform materials is prohibited.'
      ]
    },


    {
      id: 'data-privacy',
      number: '07',
      label: 'DATA',
      title: 'Data & Privacy',

      paragraphs: [
        'PeopleVault may process information submitted by organizations and users as part of providing HRMS functionality.',
        'The handling of personal information is also subject to the applicable PeopleVault Privacy Policy and relevant agreements between PeopleVault and the customer organization.'
      ],

      bullets: [
        'Organizations should provide only information necessary for legitimate HR operations.',
        'Access to workforce information should be limited according to appropriate permissions.',
        'Users should handle employee information responsibly.',
        'Customers remain responsible for determining their lawful basis and organizational requirements for processing employee information where applicable.'
      ]
    },


    {
      id: 'third-party',
      number: '08',
      label: 'INTEGRATIONS',
      title: 'Third-Party Services',

      paragraphs: [
        'PeopleVault may support integrations or connections with third-party services, applications or infrastructure.',
        'Third-party services may operate under their own terms, privacy policies and security practices. PeopleVault does not necessarily control the operation of independent third-party services.'
      ],

      bullets: [
        'Third-party integrations may require separate authentication.',
        'Availability of an integration may depend on the third-party provider.',
        'Third-party services may change their APIs or functionality.',
        'Users should review applicable third-party terms before enabling external integrations.'
      ]
    },


    {
      id: 'availability',
      number: '09',
      label: 'SERVICE',
      title: 'Service Availability',

      paragraphs: [
        'PeopleVault aims to provide a reliable HRMS experience but does not guarantee that the platform will always be available without interruption.',
        'Service availability may be affected by maintenance, updates, infrastructure issues, network conditions, security events or circumstances outside reasonable control.'
      ],

      bullets: [
        'Scheduled maintenance may temporarily affect availability.',
        'Emergency maintenance may occur when necessary to protect the platform.',
        'Certain functionality may be updated, modified or discontinued.',
        'Temporary service interruptions do not automatically constitute a termination of this agreement.'
      ]
    },


    {
      id: 'termination',
      number: '10',
      label: 'ACCESS',
      title: 'Termination',

      paragraphs: [
        'Access to PeopleVault may be suspended or terminated where necessary to protect the platform, its users, customers or legitimate business interests.',
        'An organization may also manage or revoke access for its users according to its internal policies and subscription arrangements.'
      ],

      bullets: [
        'Violation of this EULA may result in suspension or termination of access.',
        'Unauthorized or abusive activity may result in immediate access restrictions.',
        'Upon termination, the right to access and use the platform may cease.',
        'Applicable obligations that are intended to survive termination may continue to apply.'
      ]
    },


    {
      id: 'disclaimer',
      number: '11',
      label: 'LEGAL',
      title: 'Disclaimer',

      paragraphs: [
        'PeopleVault is provided subject to the terms of the applicable service arrangement. To the extent permitted by applicable law, the platform is provided without guarantees that every feature will satisfy every particular business requirement.',
        'Organizations should evaluate their operational, legal, security and compliance requirements when configuring and using the platform.'
      ],

      bullets: [
        'PeopleVault does not replace professional legal or HR advice.',
        'Organizations remain responsible for their internal HR policies and processes.',
        'Users should verify important business information before relying on it for critical decisions.'
      ]
    },


    {
      id: 'liability',
      number: '12',
      label: 'LIMITATIONS',
      title: 'Limitation of Liability',

      paragraphs: [
        'To the maximum extent permitted by applicable law, PeopleVault and its service providers will not be responsible for indirect, incidental, special or consequential losses arising from use of the platform except where such limitation is not permitted by law.',
        'Any specific limitations or exclusions contained in an applicable commercial agreement will also apply where relevant.'
      ],

      bullets: [
        'Users should maintain appropriate internal backups and controls where required.',
        'Organizations are responsible for their own account administration.',
        'Customers should maintain appropriate business continuity procedures for critical HR operations.'
      ]
    },


    {
      id: 'changes',
      number: '13',
      label: 'UPDATES',
      title: 'Changes to this EULA',

      paragraphs: [
        'PeopleVault may update this EULA from time to time to reflect changes in the platform, services, legal requirements or business practices.',
        'When material changes are made, PeopleVault may provide appropriate notice through the platform, website or other available communication channels.'
      ],

      bullets: [
        'The latest version will supersede previous versions.',
        'Users should periodically review the agreement.',
        'Continued use after an effective update may indicate acceptance where permitted by applicable law.'
      ]
    },


    {
      id: 'contact',
      number: '14',
      label: 'CONTACT',
      title: 'Contact Information',

      paragraphs: [
        'If you have questions about this End User License Agreement, PeopleVault services or your organization’s access to the platform, please contact the appropriate PeopleVault support or administrative team.'
      ],

      bullets: [
        'For product questions, contact PeopleVault support.',
        'For account access issues, contact your organization administrator.',
        'For privacy-related questions, refer to the applicable Privacy Policy or contact the designated privacy contact.',
        'For contractual questions, contact the appropriate PeopleVault business representative.'
      ]
    }

  ];


  // =========================================================
  // LEGAL FOOTER TAGS
  // =========================================================

  tags = [
    {
      label: 'PeopleVault HRMS',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'Software License',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },
    {
      label: 'Data Protection',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },
    {
      label: 'Security',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },
    {
      label: 'Authorized Access',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'HR Technology',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    },
    {
      label: 'Responsible Use',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },
    {
      label: 'Privacy',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    }
  ];


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
  // SCROLL TO SECTION
  // =========================================================

  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }


  // =========================================================
  // CURRENT YEAR
  // =========================================================

  get currentYear(): number {
    return new Date().getFullYear();
  }

}