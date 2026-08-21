import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy-privacy',
  standalone: true,
  imports: [Breadcrumb, CommonModule, RouterLink],
  templateUrl: './policy-privacy.html',
  styleUrl: './policy-privacy.css'
})
export class PolicyPrivacy implements AfterViewInit {

  // =========================================================
  // PEOPLEVAULT PRIVACY POLICY TABS
  // =========================================================

  tabs = [

    {
      id: 'privacy-overview',
      label: 'Privacy Overview',
      active: true,
      content: `
        <div class="privacy-content-header">
          <span class="privacy-content-badge">PEOPLEVAULT PRIVACY</span>

          <h2>Privacy Policy</h2>

          <p class="privacy-lead">
            At PeopleVault, we understand that employee and organizational
            information requires responsible handling. This Privacy Policy
            explains how PeopleVault approaches the collection, use,
            protection and management of information when our HRMS platform
            and website are used.
          </p>
        </div>

        <div class="privacy-highlight-box">
          <i class="ph ph-shield-check"></i>

          <div>
            <h5>Your information matters</h5>
            <p>
              We aim to provide organizations with secure and responsible
              HR technology while helping authorized users manage workforce
              information efficiently.
            </p>
          </div>
        </div>

        <h3>What This Policy Covers</h3>

        <p>
          This policy describes the general privacy principles applicable
          to PeopleVault services, website interactions and HRMS-related
          information processing.
        </p>

        <ul class="privacy-check-list">
          <li>
            <i class="ph ph-check-circle"></i>
            Information collected through our website and services
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            How information may be used to provide and improve services
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Security and access-control practices
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            User and organization responsibilities
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Communication and support-related information
          </li>
        </ul>
      `
    },

    {
      id: 'information-collection',
      label: 'Information We Collect',
      active: false,
      content: `
        <span class="privacy-content-badge">01 · INFORMATION</span>

        <h2>Information We Collect</h2>

        <p class="privacy-lead">
          Depending on how you interact with PeopleVault, different types
          of information may be provided or generated through the use of
          our website and HRMS services.
        </p>

        <h4>Account & Organization Information</h4>

        <p>
          This may include organization details, account information,
          contact information, business details and information required
          to configure or administer PeopleVault services.
        </p>

        <h4>Employee & Workforce Information</h4>

        <p>
          Organizations may use PeopleVault to manage workforce information
          such as employee profiles, employment details, attendance,
          leave, roles, designations and other HR-related records.
        </p>

        <div class="privacy-info-grid">

          <div class="privacy-mini-card">
            <i class="ph ph-user"></i>
            <h5>Profile Information</h5>
            <p>
              Employee and authorized-user profile information managed
              within the HRMS.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-buildings"></i>
            <h5>Organization Data</h5>
            <p>
              Information required to configure and operate an organization's
              HRMS environment.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-calendar-check"></i>
            <h5>HR Records</h5>
            <p>
              Workforce records such as attendance, leave and employment
              information.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-chat-circle-text"></i>
            <h5>Communication</h5>
            <p>
              Information submitted when contacting support or requesting
              information about PeopleVault.
            </p>
          </div>

        </div>
      `
    },

    {
      id: 'information-use',
      label: 'How We Use Information',
      active: false,
      content: `
        <span class="privacy-content-badge">02 · USAGE</span>

        <h2>How We Use Information</h2>

        <p class="privacy-lead">
          Information may be used to operate PeopleVault services,
          support organizations and improve the reliability and usability
          of our HRMS platform.
        </p>

        <div class="privacy-number-list">

          <div>
            <span>01</span>
            <div>
              <h5>Provide HRMS Services</h5>
              <p>
                To provide the functionality requested by organizations
                and authorized users.
              </p>
            </div>
          </div>

          <div>
            <span>02</span>
            <div>
              <h5>Maintain & Improve the Platform</h5>
              <p>
                To understand service usage and improve functionality,
                performance and user experience.
              </p>
            </div>
          </div>

          <div>
            <span>03</span>
            <div>
              <h5>Provide Support</h5>
              <p>
                To respond to questions, support requests and service
                communications.
              </p>
            </div>
          </div>

          <div>
            <span>04</span>
            <div>
              <h5>Protect the Platform</h5>
              <p>
                To help detect misuse, unauthorized access and security
                issues.
              </p>
            </div>
          </div>

        </div>
      `
    },

    {
      id: 'data-security',
      label: 'Data Security',
      active: false,
      content: `
        <span class="privacy-content-badge">03 · SECURITY</span>

        <h2>Protecting Your Information</h2>

        <p class="privacy-lead">
          Security is an important part of responsible HR technology.
          PeopleVault is designed with security-focused controls to help
          organizations manage workforce information appropriately.
        </p>

        <div class="privacy-security-card">

          <div class="privacy-security-icon">
            <i class="ph ph-shield-check"></i>
          </div>

          <div>
            <h4>Security-focused HRMS</h4>
            <p>
              PeopleVault supports controlled access to workforce
              information so organizations can manage HR data according
              to their internal responsibilities and permissions.
            </p>
          </div>

        </div>

        <h4>Security Principles</h4>

        <ul class="privacy-check-list">

          <li>
            <i class="ph ph-check-circle"></i>
            Role-based access and permissions
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Controlled access to HR information
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Responsible handling of organizational data
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Monitoring and maintenance of service security
          </li>

        </ul>

        <p>
          Organizations remain responsible for configuring appropriate
          permissions and ensuring that their authorized users handle
          workforce information responsibly.
        </p>
      `
    },

    {
      id: 'access-control',
      label: 'Access & Permissions',
      active: false,
      content: `
        <span class="privacy-content-badge">04 · ACCESS CONTROL</span>

        <h2>Access & Permissions</h2>

        <p class="privacy-lead">
          PeopleVault is intended to help organizations control which
          users can access different areas of workforce information.
        </p>

        <div class="privacy-info-grid">

          <div class="privacy-mini-card">
            <i class="ph ph-users-three"></i>
            <h5>User Access</h5>
            <p>
              Organizations can manage access for authorized users based
              on their operational requirements.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-lock-key"></i>
            <h5>Permissions</h5>
            <p>
              Permissions can help restrict access to information and
              functionality according to assigned responsibilities.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-user-gear"></i>
            <h5>Administration</h5>
            <p>
              Authorized administrators can manage users and access
              according to organizational policies.
            </p>
          </div>

          <div class="privacy-mini-card">
            <i class="ph ph-eye"></i>
            <h5>Responsible Access</h5>
            <p>
              Users should access workforce information only when
              authorized to do so.
            </p>
          </div>

        </div>
      `
    },

    {
      id: 'cookies',
      label: 'Cookies & Website Usage',
      active: false,
      content: `
        <span class="privacy-content-badge">05 · WEBSITE</span>

        <h2>Cookies & Website Usage</h2>

        <p class="privacy-lead">
          PeopleVault may use standard website technologies such as
          cookies or similar mechanisms to support website functionality,
          understand usage and improve the overall visitor experience.
        </p>

        <h4>Why Cookies May Be Used</h4>

        <ul class="privacy-check-list">

          <li>
            <i class="ph ph-check-circle"></i>
            To support essential website functionality
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            To remember relevant preferences
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            To understand website usage
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            To improve website performance and experience
          </li>

        </ul>

        <div class="privacy-note-box">
          <i class="ph ph-info"></i>
          <p>
            Cookie availability and behavior may depend on your browser,
            device and the features enabled on the PeopleVault website.
          </p>
        </div>
      `
    },

    {
      id: 'third-party',
      label: 'Third-Party Services',
      active: false,
      content: `
        <span class="privacy-content-badge">06 · SERVICES</span>

        <h2>Third-Party Services</h2>

        <p class="privacy-lead">
          Certain PeopleVault website or service functionality may rely
          on external service providers or integrations.
        </p>

        <p>
          Where third-party services are used, their handling of
          information may be governed by their own privacy policies,
          terms and security practices.
        </p>

        <div class="privacy-warning-box">
          <i class="ph ph-warning-circle"></i>

          <div>
            <h5>Review third-party policies</h5>
            <p>
              Organizations should review the terms and privacy practices
              of any external services or integrations they choose to
              connect with their PeopleVault environment.
            </p>
          </div>
        </div>
      `
    },

    {
      id: 'user-responsibilities',
      label: 'User Responsibilities',
      active: false,
      content: `
        <span class="privacy-content-badge">07 · RESPONSIBILITY</span>

        <h2>User & Organization Responsibilities</h2>

        <p class="privacy-lead">
          Privacy and security are shared responsibilities. Organizations
          and users should take appropriate steps to protect the information
          they manage through PeopleVault.
        </p>

        <ul class="privacy-check-list">

          <li>
            <i class="ph ph-check-circle"></i>
            Use strong and appropriately protected credentials
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Provide access only to authorized users
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Review user permissions regularly
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Avoid sharing confidential credentials
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Report suspicious or unauthorized activity
          </li>

          <li>
            <i class="ph ph-check-circle"></i>
            Follow applicable organizational privacy policies
          </li>

        </ul>
      `
    },

    {
      id: 'privacy-rights',
      label: 'Privacy Requests',
      active: false,
      content: `
        <span class="privacy-content-badge">08 · REQUESTS</span>

        <h2>Privacy Requests & Questions</h2>

        <p class="privacy-lead">
          If you have a question about privacy, information handled through
          PeopleVault, or your organization's use of the platform, you can
          contact the appropriate PeopleVault support or privacy contact.
        </p>

        <div class="privacy-contact-card">

          <div class="privacy-contact-icon">
            <i class="ph ph-envelope-simple"></i>
          </div>

          <div>
            <h4>Need help with privacy?</h4>

            <p>
              Contact the PeopleVault team with details about your request
              so that we can direct it to the appropriate team.
            </p>

            <a href="mailto:privacy@peoplevault.com">
              privacy@peoplevault.com
              <i class="ph ph-arrow-up-right"></i>
            </a>
          </div>

        </div>

        <p>
          When submitting a privacy request, please provide sufficient
          information for us to understand and respond to your request.
        </p>
      `
    },

    {
      id: 'policy-updates',
      label: 'Policy Updates',
      active: false,
      content: `
        <span class="privacy-content-badge">09 · UPDATES</span>

        <h2>Updates to This Privacy Policy</h2>

        <p class="privacy-lead">
          PeopleVault may update this Privacy Policy from time to time
          to reflect changes in our services, practices or applicable
          requirements.
        </p>

        <div class="privacy-timeline">

          <div class="privacy-timeline-item">
            <span>01</span>

            <div>
              <h5>Policy Review</h5>
              <p>
                Privacy practices and policy content may be reviewed
                periodically.
              </p>
            </div>
          </div>

          <div class="privacy-timeline-item">
            <span>02</span>

            <div>
              <h5>Policy Changes</h5>
              <p>
                Updates may be made when changes to services or practices
                require clarification.
              </p>
            </div>
          </div>

          <div class="privacy-timeline-item">
            <span>03</span>

            <div>
              <h5>Updated Version</h5>
              <p>
                The latest version of the policy should be reviewed
                before continuing to use relevant services.
              </p>
            </div>
          </div>

        </div>

        <div class="privacy-note-box">
          <i class="ph ph-calendar"></i>

          <p>
            Please check this page periodically for the latest version
            of the PeopleVault Privacy Policy.
          </p>
        </div>
      `
    }

  ];


  // =========================================================
  // TAGS
  // =========================================================

  tags2 = [

    {
      label: 'Data Privacy',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'HRMS Security',
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
      label: 'HR Technology',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'Privacy',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Data Security',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Workforce Data',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }

  ];
  selectTab(index: number): void {

  this.tabs.forEach((tab, i) => {
    tab.active = i === index;
  });

  window.scrollTo({
    top: document.querySelector('.privacy-content-card')?.getBoundingClientRect().top
      ? window.scrollY +
        document.querySelector('.privacy-content-card')!.getBoundingClientRect().top -
        100
      : window.scrollY,
    behavior: 'smooth'
  });
}


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

}