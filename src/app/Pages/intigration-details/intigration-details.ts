import { Component, AfterViewInit, OnInit } from '@angular/core';

import { RouterLink, ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AnimationService } from '../../services/animation';

/* =========================================================
   INTERFACES
========================================================= */

interface FeatureCapability {
  icon: string;
  title: string;
  description: string;
}

interface FeatureBenefit {
  icon: string;
  title: string;
  description: string;
}

interface FeatureStep {
  number: string;
  title: string;
  description: string;
}

interface RelatedFeature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface FeatureFaq {
  id: string;
  question: string;
  answer: string;
  show: boolean;
}

interface FeatureStat {
  icon: string;
  title: string;
  description: string;
}

interface FeatureDetail {
  slug: string;
  badge: string;
  title: string;
  headline: string;
  description: string;

  introLabel: string;
  introTitle: string;
  introduction: string;

  previewImage: string;

  stats: FeatureStat[];
  capabilities: FeatureCapability[];
  benefits: FeatureBenefit[];
  steps: FeatureStep[];
  relatedFeatures: RelatedFeature[];
  faqs: FeatureFaq[];
}

/* =========================================================
   COMPONENT
========================================================= */

@Component({
  selector: 'app-intigration-details',
  standalone: true,

  imports: [RouterLink, CommonModule],

  templateUrl: './intigration-details.html',
  styleUrl: './intigration-details.css',
})
export class IntigrationDetails implements OnInit, AfterViewInit {
  /* =======================================================
     CURRENT FEATURE
  ======================================================= */

  feature!: FeatureDetail;

  /* =======================================================
     ALL FEATURES
  ======================================================= */

  private features: Record<string, FeatureDetail> = {
    /* =====================================================
       1. EMPLOYEE MANAGEMENT
    ===================================================== */

    'employee-management': {
      slug: 'employee-management',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Employee Management',

      headline: 'One Record. Every Detail. Always Current.',

      description:
        'Manage employee information, roles, designations and documents from one centralized HR workspace.',

      introLabel: 'EMPLOYEE MANAGEMENT',

      introTitle: 'A single source of truth for every employee.',

      introduction:
        'Employee Management gives your HR team a structured and searchable record for every person in the organization. Replace scattered personal files, spreadsheets and paper folders with one organized employee record that supports your wider HR operations.',

      previewImage: 'assets/images/peoplevault/employee-management.png',

      stats: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Profiles',
          description: 'Maintain structured personal, contact and employment information.',
        },
        {
          icon: 'ph-bold ph-users-three',
          title: 'Roles & Designations',
          description: 'Organize employees by role, designation and reporting structure.',
        },
        {
          icon: 'ph-bold ph-files',
          title: 'KYC & Documents',
          description: 'Keep applicable employee KYC and supporting documents organized.',
        },
        {
          icon: 'ph-bold ph-database',
          title: 'Centralized Records',
          description: 'Keep employee information consistent across HR operations.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Structured Employee Profiles',
          description:
            'Maintain personal, contact and employment details for every employee in one organized profile.',
        },
        {
          icon: 'ph-bold ph-buildings',
          title: 'Departments & Designations',
          description:
            'Manage departments, designations and reporting relationships across the organization.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Role-Based Access',
          description: 'Assign roles and control access according to configured permissions.',
        },
        {
          icon: 'ph-bold ph-identification-card',
          title: 'KYC & Documents',
          description: 'Capture and maintain applicable employee KYC and supporting documents.',
        },
        {
          icon: 'ph-bold ph-clock-counter-clockwise',
          title: 'Employee History',
          description: 'Maintain an organized history of changes made to employee information.',
        },
        {
          icon: 'ph-bold ph-arrows-clockwise',
          title: 'Connected HR Data',
          description:
            'Use employee information across attendance, leave, payroll and policy workflows.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-lightning',
          title: 'Faster Information Access',
          description:
            'Find employee information quickly instead of searching through scattered files.',
        },
        {
          icon: 'ph-bold ph-database',
          title: 'One Source of Truth',
          description: 'Keep employee records consistent across HR, payroll and reporting.',
        },
        {
          icon: 'ph-bold ph-check-circle',
          title: 'Reduce Manual Work',
          description: 'Reduce repetitive data entry and manual employee record maintenance.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Better Access Control',
          description: 'Control who can view or edit sensitive employee information.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Create Employee Profile',
          description:
            'HR creates a new employee profile with the required personal and employment information.',
        },
        {
          number: '02',
          title: 'Assign Role & Designation',
          description:
            'Assign the employee role, designation and relevant organizational information.',
        },
        {
          number: '03',
          title: 'Add KYC & Documents',
          description: 'Upload and maintain applicable employee KYC and supporting documents.',
        },
        {
          number: '04',
          title: 'Connect HR Operations',
          description:
            'The employee record becomes a central source of information for attendance, leave, payroll and policies.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance',
          description: 'Track employee attendance and work-related information.',
          link: '/intigration-details?feature=attendance',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Management',
          description: 'Manage leave requests, balances and approval workflows.',
          link: '/intigration-details?feature=leave-management',
        },
        {
          icon: 'ph-bold ph-money',
          title: 'Payroll',
          description: 'Manage salary, deductions, payslips and payroll information.',
          link: '/intigration-details?feature=payroll',
        },
        {
          icon: 'ph-bold ph-identification-card',
          title: 'KYC & Documents',
          description: 'Manage employee KYC information and supporting documents.',
          link: '/intigration-details?feature=kyc-documents',
        },
      ],

      faqs: [
        {
          id: 'employeeFaqOne',
          question: 'Can I manage employee profiles?',
          answer:
            'Yes. Employee profiles can contain personal, contact and employment information.',
          show: true,
        },
        {
          id: 'employeeFaqTwo',
          question: 'Who can edit employee information?',
          answer: 'Access can be controlled through configured roles and permissions.',
          show: false,
        },
        {
          id: 'employeeFaqThree',
          question: 'Can employee information connect with other HR modules?',
          answer:
            'Yes. Employee information can be used across attendance, leave, payroll and other HR workflows.',
          show: false,
        },
        {
          id: 'employeeFaqFour',
          question: 'Can employee documents be maintained?',
          answer: 'Yes. Applicable KYC and supporting employee documents can be maintained.',
          show: false,
        },
      ],
    },

    /* =====================================================
       2. ATTENDANCE
    ===================================================== */

    attendance: {
      slug: 'attendance',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Attendance',

      headline: 'Track Time. Improve Visibility. Stay Organized.',

      description:
        'Manage employee attendance, working hours, check-ins and attendance records from one centralized HR workspace.',

      introLabel: 'ATTENDANCE MANAGEMENT',

      introTitle: 'A clearer view of employee attendance.',

      introduction:
        'PeopleVault Attendance helps HR teams maintain organized attendance information and gives managers better visibility into employee presence, working patterns and attendance records.',

      previewImage: 'assets/images/peoplevault/attendance.png',

      stats: [
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Daily Attendance',
          description: 'Maintain organized daily attendance records for your workforce.',
        },
        {
          icon: 'ph-bold ph-clock',
          title: 'Check In & Out',
          description: 'Track employee check-in and check-out activity.',
        },
        {
          icon: 'ph-bold ph-timer',
          title: 'Working Hours',
          description: 'Get better visibility into employee working hours.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Attendance Reports',
          description: 'Review attendance information through structured reports.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Daily Attendance Tracking',
          description:
            'Maintain daily attendance information for employees across your organization.',
        },
        {
          icon: 'ph-bold ph-clock',
          title: 'Check-In & Check-Out',
          description: 'Record employee check-in and check-out information for better visibility.',
        },
        {
          icon: 'ph-bold ph-timer',
          title: 'Working Hours',
          description: 'Track working time and understand employee attendance patterns.',
        },
        {
          icon: 'ph-bold ph-warning-circle',
          title: 'Late & Early Tracking',
          description: 'Identify attendance exceptions such as late arrivals and early departures.',
        },
        {
          icon: 'ph-bold ph-calendar',
          title: 'Attendance Calendar',
          description: 'View attendance information in an easy-to-understand calendar format.',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Attendance Reports',
          description: 'Generate useful attendance information for HR and management review.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-eye',
          title: 'Better Visibility',
          description: 'Get a clear view of employee attendance across the organization.',
        },
        {
          icon: 'ph-bold ph-clock',
          title: 'Save HR Time',
          description: 'Reduce manual attendance tracking and repetitive administrative work.',
        },
        {
          icon: 'ph-bold ph-warning-circle',
          title: 'Identify Exceptions',
          description: 'Spot attendance irregularities and patterns more easily.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Better Reporting',
          description: 'Use organized attendance information for HR reporting and review.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Set Up Attendance',
          description: 'Configure the attendance workflow and relevant employee information.',
        },
        {
          number: '02',
          title: 'Record Attendance',
          description: 'Capture employee attendance and check-in or check-out activity.',
        },
        {
          number: '03',
          title: 'Review Exceptions',
          description: 'Review late arrivals, early departures and other attendance exceptions.',
        },
        {
          number: '04',
          title: 'Analyze Reports',
          description: 'Review attendance reports and use the information for HR decisions.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Manage the employee information connected to attendance records.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Management',
          description: 'Connect attendance information with employee leave workflows.',
          link: '/intigration-details?feature=leave-management',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Use attendance information for HR reports and analysis.',
          link: '/intigration-details?feature=reports-analytics',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Roles & Permissions',
          description: 'Control who can access and manage attendance information.',
          link: '/intigration-details?feature=roles-permissions',
        },
      ],

      faqs: [
        {
          id: 'attendanceFaqOne',
          question: 'Can HR track daily employee attendance?',
          answer:
            'Yes. The attendance module is designed to maintain daily employee attendance information in one centralized location.',
          show: true,
        },
        {
          id: 'attendanceFaqTwo',
          question: 'Can check-in and check-out information be maintained?',
          answer:
            'Yes. Check-in and check-out information can be maintained as part of the configured attendance workflow.',
          show: false,
        },
        {
          id: 'attendanceFaqThree',
          question: 'Can attendance exceptions be reviewed?',
          answer:
            'Yes. Authorized users can review attendance exceptions such as late arrivals and early departures.',
          show: false,
        },
        {
          id: 'attendanceFaqFour',
          question: 'Can attendance reports be generated?',
          answer:
            'Attendance information can be organized and reviewed through reporting workflows configured for the organization.',
          show: false,
        },
      ],
    },

    /* =====================================================
       3. LEAVE MANAGEMENT
    ===================================================== */

    'leave-management': {
      slug: 'leave-management',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Leave Management',

      headline: 'Simplify Leave Requests. Streamline Approvals.',

      description:
        'Manage employee leave requests, leave balances, policies and approval workflows from one centralized platform.',

      introLabel: 'LEAVE MANAGEMENT',

      introTitle: 'Make employee leave simple and transparent.',

      introduction:
        'PeopleVault Leave Management gives employees and HR teams a structured way to manage leave requests, balances, approvals and leave-related information.',

      previewImage: 'assets/images/peoplevault/leave-management.png',

      stats: [
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Requests',
          description: 'Employees can submit leave requests through a structured workflow.',
        },
        {
          icon: 'ph-bold ph-chart-pie-slice',
          title: 'Leave Balances',
          description: 'Maintain visibility into available and used leave balances.',
        },
        {
          icon: 'ph-bold ph-check-square',
          title: 'Approvals',
          description: 'Manage leave approvals through a clear workflow.',
        },
        {
          icon: 'ph-bold ph-calendar',
          title: 'Leave Calendar',
          description: 'View employee leave information in a centralized calendar.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Requests',
          description: 'Provide employees with a structured way to submit leave requests.',
        },
        {
          icon: 'ph-bold ph-chart-pie-slice',
          title: 'Leave Balances',
          description: 'Maintain visibility into leave allocation, usage and available balances.',
        },
        {
          icon: 'ph-bold ph-check-square',
          title: 'Approval Workflows',
          description: 'Route leave requests through configured approval processes.',
        },
        {
          icon: 'ph-bold ph-calendar',
          title: 'Leave Calendar',
          description: 'View employee leave schedules and approved absences in one place.',
        },
        {
          icon: 'ph-bold ph-buildings',
          title: 'Leave Policies',
          description: 'Manage leave rules and policies according to organizational requirements.',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Leave Reports',
          description: 'Review leave utilization and employee absence information.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-lightning',
          title: 'Faster Approvals',
          description: 'Reduce delays by keeping leave requests and approvals in one workflow.',
        },
        {
          icon: 'ph-bold ph-eye',
          title: 'Clear Leave Visibility',
          description: 'Give employees and HR better visibility into leave balances and schedules.',
        },
        {
          icon: 'ph-bold ph-files',
          title: 'Less Paperwork',
          description: 'Replace manual leave records with an organized digital workflow.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Better Planning',
          description: 'Use leave information to understand workforce availability.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Configure Leave Policies',
          description: 'Set up the leave categories and policies applicable to your organization.',
        },
        {
          number: '02',
          title: 'Employee Submits Request',
          description: 'Employees submit leave requests through the configured workflow.',
        },
        {
          number: '03',
          title: 'Manager Reviews',
          description: 'The appropriate manager or authorized user reviews the request.',
        },
        {
          number: '04',
          title: 'Update Leave Balance',
          description: 'Approved leave is reflected in the employee leave information.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Connect leave information with employee records.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance',
          description: 'Understand attendance together with approved employee leave.',
          link: '/intigration-details?feature=attendance',
        },
        {
          icon: 'ph-bold ph-notepad',
          title: 'Company Policies',
          description: 'Manage policies that define employee leave rules.',
          link: '/intigration-details?feature=company-policies',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Analyze leave information through HR reporting.',
          link: '/intigration-details?feature=reports-analytics',
        },
      ],

      faqs: [
        {
          id: 'leaveFaqOne',
          question: 'Can employees submit leave requests?',
          answer:
            'Yes. Employees can submit leave requests through the configured leave management workflow.',
          show: true,
        },
        {
          id: 'leaveFaqTwo',
          question: 'Can leave balances be tracked?',
          answer:
            'Yes. Leave allocation, usage and available balances can be maintained according to configured policies.',
          show: false,
        },
        {
          id: 'leaveFaqThree',
          question: 'Can managers approve leave requests?',
          answer:
            'Yes. Leave requests can follow the approval workflow configured for your organization.',
          show: false,
        },
        {
          id: 'leaveFaqFour',
          question: 'Can HR view employee leave information?',
          answer:
            'Authorized HR users can review leave requests, balances and related employee information.',
          show: false,
        },
      ],
    },

    /* =====================================================
       4. PAYROLL
    ===================================================== */

    payroll: {
      slug: 'payroll',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Payroll',

      headline: 'Simplify Payroll. Improve Accuracy. Stay Organized.',

      description:
        'Manage salary information, payroll components, deductions and payslips through a centralized payroll workflow.',

      introLabel: 'PAYROLL MANAGEMENT',

      introTitle: 'Bring payroll information into one organized workflow.',

      introduction:
        'PeopleVault Payroll helps HR teams organize salary information and payroll-related processes while keeping employee compensation data connected with the wider HR platform.',

      previewImage: 'assets/images/peoplevault/payroll.png',

      stats: [
        {
          icon: 'ph-bold ph-money',
          title: 'Salary Management',
          description: 'Maintain structured salary and compensation information.',
        },
        {
          icon: 'ph-bold ph-receipt',
          title: 'Payslips',
          description: 'Manage and organize employee payslip information.',
        },
        {
          icon: 'ph-bold ph-calculator',
          title: 'Deductions',
          description: 'Maintain relevant payroll deductions and components.',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Payroll Reports',
          description: 'Review payroll information through structured reports.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-money',
          title: 'Salary Management',
          description:
            'Maintain employee salary and compensation information in a centralized location.',
        },
        {
          icon: 'ph-bold ph-list-numbers',
          title: 'Salary Components',
          description: 'Organize salary components according to your payroll structure.',
        },
        {
          icon: 'ph-bold ph-calculator',
          title: 'Deductions',
          description: 'Maintain applicable deductions and payroll-related adjustments.',
        },
        {
          icon: 'ph-bold ph-receipt',
          title: 'Payslips',
          description: 'Generate and organize employee payslip information.',
        },
        {
          icon: 'ph-bold ph-calendar',
          title: 'Payroll Cycles',
          description: 'Manage payroll information according to configured payroll periods.',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Payroll Reports',
          description: 'Review payroll information through useful reports and summaries.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-lightning',
          title: 'Reduce Manual Work',
          description: 'Centralize payroll information and reduce repetitive administrative work.',
        },
        {
          icon: 'ph-bold ph-check-circle',
          title: 'Improve Accuracy',
          description: 'Keep payroll information organized and consistent across employee records.',
        },
        {
          icon: 'ph-bold ph-lock',
          title: 'Protect Sensitive Data',
          description: 'Control access to sensitive salary and payroll information.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Better Payroll Visibility',
          description: 'Give authorized users a clearer view of payroll information and reports.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Set Up Payroll Structure',
          description:
            'Configure salary components and payroll information required by the organization.',
        },
        {
          number: '02',
          title: 'Maintain Employee Salary',
          description: 'Connect employee compensation information with their employee records.',
        },
        {
          number: '03',
          title: 'Process Payroll',
          description: 'Review salary information, deductions and applicable payroll components.',
        },
        {
          number: '04',
          title: 'Generate Payslips & Reports',
          description: 'Organize employee payslips and payroll reports for review.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Connect salary information with employee records.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance',
          description: 'Use attendance information as part of connected HR operations.',
          link: '/intigration-details?feature=attendance',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Management',
          description: 'Connect employee leave information with payroll workflows.',
          link: '/intigration-details?feature=leave-management',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Review payroll information through HR reporting.',
          link: '/intigration-details?feature=reports-analytics',
        },
      ],

      faqs: [
        {
          id: 'payrollFaqOne',
          question: 'Can employee salary information be maintained?',
          answer:
            'Yes. Employee salary and compensation information can be maintained through the payroll workflow.',
          show: true,
        },
        {
          id: 'payrollFaqTwo',
          question: 'Can salary components and deductions be managed?',
          answer:
            'Yes. Salary components and applicable deductions can be organized according to your configured payroll structure.',
          show: false,
        },
        {
          id: 'payrollFaqThree',
          question: 'Can employee payslips be generated?',
          answer:
            'Payslip information can be generated and organized according to the payroll workflow configured for your organization.',
          show: false,
        },
        {
          id: 'payrollFaqFour',
          question: 'Who can access payroll information?',
          answer:
            'Access to sensitive payroll information should be controlled through your configured roles and permissions.',
          show: false,
        },
      ],
    },

    /* =====================================================
       5. COMPANY POLICIES
    ===================================================== */

    'company-policies': {
      slug: 'company-policies',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Company Policies',

      headline: 'Keep Policies Clear. Accessible. Organized.',

      description:
        'Create, publish and manage company policies while keeping employees informed about important organizational guidelines.',

      introLabel: 'COMPANY POLICIES',

      introTitle: 'Put every important policy in one place.',

      introduction:
        'PeopleVault Company Policies helps organizations organize HR policies, publish important guidelines and maintain visibility into employee acknowledgment and policy information.',

      previewImage: 'assets/images/peoplevault/company-policies.png',

      stats: [
        {
          icon: 'ph-bold ph-notepad',
          title: 'Policy Management',
          description: 'Maintain company policies and HR guidelines in one centralized place.',
        },
        {
          icon: 'ph-bold ph-file-text',
          title: 'Policy Documents',
          description: 'Keep important policy documents organized and accessible.',
        },
        {
          icon: 'ph-bold ph-broadcast',
          title: 'Policy Publishing',
          description: 'Share important policies with employees through a structured workflow.',
        },
        {
          icon: 'ph-bold ph-check-square',
          title: 'Acknowledgment',
          description: 'Maintain visibility into employee policy acknowledgment.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-notepad',
          title: 'Create Policies',
          description:
            'Create and maintain company policies according to organizational requirements.',
        },
        {
          icon: 'ph-bold ph-file-text',
          title: 'Policy Documents',
          description: 'Organize policy documents and supporting HR information.',
        },
        {
          icon: 'ph-bold ph-broadcast',
          title: 'Publish Policies',
          description:
            'Make relevant policies available to employees through a centralized platform.',
        },
        {
          icon: 'ph-bold ph-check-square',
          title: 'Employee Acknowledgment',
          description: 'Track employee acknowledgment of applicable company policies.',
        },
        {
          icon: 'ph-bold ph-clock-counter-clockwise',
          title: 'Policy Updates',
          description: 'Keep policy information updated as organizational requirements change.',
        },
        {
          icon: 'ph-bold ph-magnifying-glass',
          title: 'Easy Policy Access',
          description: 'Give employees a clear place to find relevant company policies.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-eye',
          title: 'Better Policy Visibility',
          description: 'Make important organizational policies easier for employees to find.',
        },
        {
          icon: 'ph-bold ph-folder-open',
          title: 'Centralized Documents',
          description: 'Keep policy information and related documents organized in one place.',
        },
        {
          icon: 'ph-bold ph-megaphone',
          title: 'Clear Communication',
          description: 'Communicate important HR policies to employees more effectively.',
        },
        {
          icon: 'ph-bold ph-check-circle',
          title: 'Better Tracking',
          description: 'Maintain visibility into policy acknowledgment and updates.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Create Policy',
          description:
            'HR creates the company policy and adds the relevant organizational information.',
        },
        {
          number: '02',
          title: 'Add Documents',
          description: 'Attach supporting documents or policy information where required.',
        },
        {
          number: '03',
          title: 'Publish to Employees',
          description: 'Make the policy available to the appropriate employees.',
        },
        {
          number: '04',
          title: 'Track Acknowledgment',
          description: 'Review employee acknowledgment and keep policy information updated.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Connect company policies with employee information.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Management',
          description: 'Manage leave rules and employee leave workflows.',
          link: '/intigration-details?feature=leave-management',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Roles & Permissions',
          description: 'Control access to policy information.',
          link: '/intigration-details?feature=roles-permissions',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Review policy-related information through reports.',
          link: '/intigration-details?feature=reports-analytics',
        },
      ],

      faqs: [
        {
          id: 'policyFaqOne',
          question: 'Can HR create company policies?',
          answer:
            'Yes. HR teams can maintain company policy information through the configured policy management workflow.',
          show: true,
        },
        {
          id: 'policyFaqTwo',
          question: 'Can policy documents be stored?',
          answer:
            'Yes. Supporting policy documents can be organized with the relevant policy information.',
          show: false,
        },
        {
          id: 'policyFaqThree',
          question: 'Can employees access published policies?',
          answer:
            'Policies can be made available to the appropriate employees according to your configured access and publishing workflow.',
          show: false,
        },
        {
          id: 'policyFaqFour',
          question: 'Can employee acknowledgment be tracked?',
          answer:
            'Employee acknowledgment can be maintained as part of the configured company policy workflow.',
          show: false,
        },
      ],
    },

    /* =====================================================
       6. KYC & DOCUMENTS
    ===================================================== */

    'kyc-documents': {
      slug: 'kyc-documents',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'KYC & Documents',

      headline: 'Keep Employee Documents Organized & Accessible.',

      description:
        'Collect, manage and organize employee KYC information and supporting documents from one centralized HR workspace.',

      introLabel: 'KYC & DOCUMENTS',

      introTitle: 'Keep employee documentation structured and organized.',

      introduction:
        'PeopleVault KYC & Documents helps HR teams maintain employee KYC information and supporting documents in an organized digital workspace. Keep important employee documentation connected to the employee record and accessible to authorized users.',

      previewImage: 'assets/images/peoplevault/kyc-documents.png',

      stats: [
        {
          icon: 'ph-bold ph-identification-card',
          title: 'KYC Information',
          description: 'Maintain applicable employee identification and KYC information.',
        },
        {
          icon: 'ph-bold ph-files',
          title: 'Document Management',
          description: 'Keep employee documents organized in one centralized location.',
        },
        {
          icon: 'ph-bold ph-folder-open',
          title: 'Centralized Records',
          description: 'Connect documents with the relevant employee profile.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Controlled Access',
          description: 'Restrict sensitive employee documents to authorized users.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-identification-card',
          title: 'Employee KYC',
          description: 'Maintain applicable KYC information as part of the employee record.',
        },
        {
          icon: 'ph-bold ph-files',
          title: 'Document Upload',
          description: 'Upload and maintain relevant employee supporting documents.',
        },
        {
          icon: 'ph-bold ph-folder-open',
          title: 'Organized Documents',
          description: 'Keep employee documentation structured and easy to locate.',
        },
        {
          icon: 'ph-bold ph-magnifying-glass',
          title: 'Easy Document Access',
          description: 'Find relevant employee documents quickly when required.',
        },
        {
          icon: 'ph-bold ph-clock-counter-clockwise',
          title: 'Document Updates',
          description: 'Maintain updated employee documentation as information changes.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Role-Based Access',
          description: 'Control document access according to configured permissions.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-folder-open',
          title: 'Centralized Documentation',
          description: 'Keep employee documents organized instead of relying on scattered files.',
        },
        {
          icon: 'ph-bold ph-lightning',
          title: 'Faster Access',
          description: 'Find required employee documentation more quickly.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Better Control',
          description: 'Limit access to sensitive employee documents.',
        },
        {
          icon: 'ph-bold ph-check-circle',
          title: 'Better Organization',
          description: 'Maintain a consistent documentation workflow across employees.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Open Employee Profile',
          description:
            'Select the employee whose KYC or supporting documents need to be maintained.',
        },
        {
          number: '02',
          title: 'Add KYC Information',
          description: 'Enter the applicable employee KYC information.',
        },
        {
          number: '03',
          title: 'Upload Documents',
          description: 'Add the required supporting employee documents.',
        },
        {
          number: '04',
          title: 'Review & Maintain',
          description: 'Review documents and keep employee documentation updated.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Connect KYC and documents with employee profiles.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Roles & Permissions',
          description: 'Control who can access employee documents.',
          link: '/intigration-details?feature=roles-permissions',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Use available employee information for HR reporting.',
          link: '/intigration-details?feature=reports-analytics',
        },
        {
          icon: 'ph-bold ph-notepad',
          title: 'Company Policies',
          description: 'Keep employee documentation connected with HR workflows.',
          link: '/intigration-details?feature=company-policies',
        },
      ],

      faqs: [
        {
          id: 'kycFaqOne',
          question: 'Can employee KYC information be maintained?',
          answer:
            'Yes. Applicable employee KYC information can be maintained through the KYC and Documents workflow.',
          show: true,
        },
        {
          id: 'kycFaqTwo',
          question: 'Can employee documents be uploaded?',
          answer:
            'Yes. Supporting employee documents can be uploaded and maintained according to the configured workflow.',
          show: false,
        },
        {
          id: 'kycFaqThree',
          question: 'Who can access employee documents?',
          answer:
            'Access can be controlled through the roles and permissions configured for your organization.',
          show: false,
        },
        {
          id: 'kycFaqFour',
          question: 'Can documents be updated later?',
          answer:
            'Yes. Employee documentation can be updated as required through the configured workflow.',
          show: false,
        },
      ],
    },

    /* =====================================================
       7. ROLES & PERMISSIONS
    ===================================================== */

    'roles-permissions': {
      slug: 'roles-permissions',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Roles & Permissions',

      headline: 'Give the Right People the Right Access.',

      description:
        'Manage user roles and permissions so employees, managers and administrators can access the HR information they need.',

      introLabel: 'ROLES & PERMISSIONS',

      introTitle: 'Control access with confidence.',

      introduction:
        'PeopleVault Roles & Permissions helps organizations structure access across HR workflows. Define responsibilities, control module access and ensure users receive permissions appropriate to their role.',

      previewImage: 'assets/images/peoplevault/roles-permissions.png',

      stats: [
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Access Control',
          description: 'Control access to HR information and system functionality.',
        },
        {
          icon: 'ph-bold ph-users-three',
          title: 'User Roles',
          description: 'Create roles according to organizational responsibilities.',
        },
        {
          icon: 'ph-bold ph-lock-key',
          title: 'Module Permissions',
          description: 'Define which HR modules users can access.',
        },
        {
          icon: 'ph-bold ph-user-gear',
          title: 'Admin Controls',
          description: 'Give administrators better control over user access.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-users-three',
          title: 'Create User Roles',
          description:
            'Define roles according to employee responsibilities and organizational structure.',
        },
        {
          icon: 'ph-bold ph-lock-key',
          title: 'Module Permissions',
          description: 'Control access to different HR modules and functionality.',
        },
        {
          icon: 'ph-bold ph-eye',
          title: 'View Permissions',
          description: 'Determine which information a user can view based on assigned permissions.',
        },
        {
          icon: 'ph-bold ph-pencil-simple',
          title: 'Edit Permissions',
          description: 'Control which users can create or modify HR information.',
        },
        {
          icon: 'ph-bold ph-user-gear',
          title: 'Administrative Access',
          description: 'Provide appropriate administrative capabilities to authorized users.',
        },
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Secure HR Workflows',
          description: 'Apply access rules consistently across HR operations.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-shield-check',
          title: 'Better Security',
          description: 'Limit access to sensitive HR information based on user responsibilities.',
        },
        {
          icon: 'ph-bold ph-users-three',
          title: 'Clear Responsibilities',
          description: 'Define what each role can access and manage.',
        },
        {
          icon: 'ph-bold ph-lock-key',
          title: 'Reduced Access Risk',
          description: 'Avoid giving unnecessary permissions to users who do not need them.',
        },
        {
          icon: 'ph-bold ph-gear',
          title: 'Flexible Administration',
          description: 'Adapt roles and permissions as your organization grows.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Define Roles',
          description: 'Create roles based on organizational responsibilities.',
        },
        {
          number: '02',
          title: 'Assign Permissions',
          description: 'Choose the modules and actions available to each role.',
        },
        {
          number: '03',
          title: 'Assign Users',
          description: 'Connect employees or users with the appropriate roles.',
        },
        {
          number: '04',
          title: 'Review Access',
          description: 'Regularly review permissions and update them as responsibilities change.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Manage employee information protected by access controls.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-money',
          title: 'Payroll',
          description: 'Control access to sensitive payroll information.',
          link: '/intigration-details?feature=payroll',
        },
        {
          icon: 'ph-bold ph-notepad',
          title: 'Company Policies',
          description: 'Manage access to company policies and documents.',
          link: '/intigration-details?feature=company-policies',
        },
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Reports & Analytics',
          description: 'Control who can access HR reports and analytics.',
          link: '/intigration-details?feature=reports-analytics',
        },
      ],

      faqs: [
        {
          id: 'rolesFaqOne',
          question: 'Can different users have different permissions?',
          answer:
            'Yes. Roles can be configured with different permissions according to organizational responsibilities.',
          show: true,
        },
        {
          id: 'rolesFaqTwo',
          question: 'Can access be controlled by module?',
          answer:
            'Yes. Permissions can be configured to control access to different HR modules and functionality.',
          show: false,
        },
        {
          id: 'rolesFaqThree',
          question: 'Can permissions be updated later?',
          answer:
            'Yes. Roles and permissions can be reviewed and updated as organizational responsibilities change.',
          show: false,
        },
        {
          id: 'rolesFaqFour',
          question: 'Can sensitive HR information be restricted?',
          answer:
            'Yes. Access controls can be used to restrict sensitive HR information to authorized users.',
          show: false,
        },
      ],
    },

    /* =====================================================
       8. REPORTS & ANALYTICS
    ===================================================== */

    'reports-analytics': {
      slug: 'reports-analytics',

      badge: 'PEOPLEVAULT FEATURE',

      title: 'Reports & Analytics',

      headline: 'Turn HR Data Into Better Decisions.',

      description:
        'Bring employee, attendance, leave and payroll information together through clear HR reports and analytics.',

      introLabel: 'REPORTS & ANALYTICS',

      introTitle: 'See your workforce information more clearly.',

      introduction:
        'PeopleVault Reports & Analytics gives HR teams a structured way to review workforce information across different HR workflows. Use organized data to identify trends, monitor operations and support better decisions.',

      previewImage: 'assets/images/peoplevault/reports-analytics.png',

      stats: [
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'HR Reports',
          description: 'Review structured reports across key HR operations.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Workforce Insights',
          description: 'Understand workforce information through organized analytics.',
        },
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance Reports',
          description: 'Review attendance patterns and workforce availability.',
        },
        {
          icon: 'ph-bold ph-money',
          title: 'Payroll Reports',
          description: 'Review payroll-related information through structured reports.',
        },
      ],

      capabilities: [
        {
          icon: 'ph-bold ph-chart-bar',
          title: 'Employee Reports',
          description: 'Review employee information through organized HR reports.',
        },
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance Reports',
          description: 'Analyze attendance information and workforce presence.',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Reports',
          description: 'Review leave requests, usage and employee absence information.',
        },
        {
          icon: 'ph-bold ph-money',
          title: 'Payroll Reports',
          description: 'Review payroll and compensation information through reports.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Workforce Insights',
          description: 'Use HR information to identify trends and patterns.',
        },
        {
          icon: 'ph-bold ph-funnel',
          title: 'Organized Data Views',
          description: 'Review relevant HR information through structured data views.',
        },
      ],

      benefits: [
        {
          icon: 'ph-bold ph-eye',
          title: 'Better Visibility',
          description: 'Get a clearer view of important workforce information.',
        },
        {
          icon: 'ph-bold ph-lightning',
          title: 'Faster Insights',
          description: 'Find relevant HR information without manually combining spreadsheets.',
        },
        {
          icon: 'ph-bold ph-chart-line-up',
          title: 'Better Decisions',
          description: 'Use organized HR information to support management decisions.',
        },
        {
          icon: 'ph-bold ph-database',
          title: 'Centralized Reporting',
          description:
            'Bring information from different HR workflows into one reporting experience.',
        },
      ],

      steps: [
        {
          number: '01',
          title: 'Collect HR Information',
          description:
            'Maintain employee, attendance, leave and payroll information within PeopleVault.',
        },
        {
          number: '02',
          title: 'Select Report',
          description: 'Choose the HR information or report relevant to your requirement.',
        },
        {
          number: '03',
          title: 'Review Insights',
          description:
            'Analyze the available information and identify important workforce patterns.',
        },
        {
          number: '04',
          title: 'Make Better Decisions',
          description: 'Use the information to support HR planning and operational decisions.',
        },
      ],

      relatedFeatures: [
        {
          icon: 'ph-bold ph-user-circle',
          title: 'Employee Management',
          description: 'Use employee information as a foundation for HR reporting.',
          link: '/intigration-details?feature=employee-management',
        },
        {
          icon: 'ph-bold ph-calendar-check',
          title: 'Attendance',
          description: 'Analyze attendance information and workforce presence.',
          link: '/intigration-details?feature=attendance',
        },
        {
          icon: 'ph-bold ph-calendar-plus',
          title: 'Leave Management',
          description: 'Review leave and absence information through reporting.',
          link: '/intigration-details?feature=leave-management',
        },
        {
          icon: 'ph-bold ph-money',
          title: 'Payroll',
          description: 'Review payroll information through centralized reporting.',
          link: '/intigration-details?feature=payroll',
        },
      ],

      faqs: [
        {
          id: 'reportsFaqOne',
          question: 'What type of HR information can be reported?',
          answer:
            'Reports can be based on HR information available across configured PeopleVault workflows such as employees, attendance, leave and payroll.',
          show: true,
        },
        {
          id: 'reportsFaqTwo',
          question: 'Can attendance information be included in reports?',
          answer:
            'Yes. Attendance information can be reviewed through the reporting workflows configured for your organization.',
          show: false,
        },
        {
          id: 'reportsFaqThree',
          question: 'Can payroll information be reported?',
          answer:
            'Authorized users can review payroll-related information through the configured reporting workflows.',
          show: false,
        },
        {
          id: 'reportsFaqFour',
          question: 'Who can access HR reports?',
          answer:
            'Report access should be controlled through the roles and permissions configured for your organization.',
          show: false,
        },
      ],
    },
  };

  /* =======================================================
     CONSTRUCTOR
  ======================================================= */

  constructor(
    private animationService: AnimationService,
    private route: ActivatedRoute,
  ) {}

  /* =======================================================
     INIT
  ======================================================= */

  ngOnInit(): void {
    /*
     * Listen to query parameter.
     *
     * Example:
     *
     * /intigration-details?feature=attendance
     */

    this.route.queryParamMap.subscribe((params) => {
      const featureKey = params.get('feature')?.toLowerCase().trim();

      /*
       * If no feature is supplied,
       * show Employee Management as default.
       */

      this.setFeature(featureKey || 'employee-management');
    });
  }

  /* =======================================================
     AFTER VIEW INIT
  ======================================================= */

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationService.initAnimations();
    }, 100);
  }

  /* =======================================================
     SET CURRENT FEATURE
  ======================================================= */

  private setFeature(featureKey: string): void {
    const selectedFeature = this.features[featureKey];

    if (!selectedFeature) {
      console.error(`Feature "${featureKey}" was not found.`);

      /*
       * Safe fallback.
       */

      this.feature = this.features['employee-management'];

      return;
    }

    this.feature = selectedFeature;

    console.log('Current Feature:', this.feature.title);
  }

  /* =======================================================
     FAQ TOGGLE
  ======================================================= */

  toggleFaq(index: number): void {
    if (!this.feature?.faqs) {
      return;
    }

    this.feature.faqs.forEach((faq, faqIndex) => {
      if (faqIndex === index) {
        faq.show = !faq.show;
      } else {
        faq.show = false;
      }
    });
  }

  /* =======================================================
     CHECK FAQ
  ======================================================= */

  isFaqOpen(index: number): boolean {
    return this.feature?.faqs?.[index]?.show ?? false;
  }

  /* =======================================================
     TRACK BY
  ======================================================= */

  trackByTitle(index: number, item: { title: string }): string {
    return item.title;
  }

  /* =======================================================
     FEATURE NAVIGATION
  ======================================================= */

  getFeatureLink(slug: string): string {
    return `/intigration-details?feature=${slug}`;
  }
}
