import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    Breadcrumb,
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements AfterViewInit {

  // =========================================================
  // CURRENT ARTICLE
  // =========================================================

  currentArticle: any = null;


  // =========================================================
  // ALL BLOG ARTICLES
  // =========================================================

  articles = [

    {
      id: 'what-is-an-hrms',

      title: 'What Is an HRMS? A Complete Guide for Modern HR Teams',

      category: 'HRMS Guide',

      image: 'assets/images/thumbs/blog-page-img1.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '5 min Read',

      excerpt:
        'Understand how an HRMS can bring employee records, attendance, leave, payroll and workforce operations together in one centralized platform.',

      content: [
        `Human Resource Management Systems (HRMS) help organizations bring important HR activities into one centralized digital environment. Instead of managing employee information and HR processes across spreadsheets, documents and disconnected systems, organizations can use an HRMS to create a more structured approach to workforce management.`,

        `For growing organizations, having a centralized source of employee information can make everyday HR operations easier to manage. HR teams can maintain employee profiles, employment information, designations, roles and other workforce records in a structured system.`,

        `An HRMS can also help connect different HR processes. Employee management, attendance, leave management, payroll, company policies, documents and reporting can be organized within a connected platform.`
      ],

      quote:
        'Better HR management starts with organized information, connected processes and the right access for every user.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'How an HRMS Helps Modern HR Teams',

      points: [
        'Centralize employee information and workforce records.',
        'Organize HR processes in one connected environment.',
        'Improve visibility across employee-related information.',
        'Support structured roles and permission management.',
        'Make workforce information easier to access and manage.',
        'Use reports and dashboards to support better decisions.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'A well-structured HRMS can provide a foundation for more organized and efficient HR operations. PeopleVault brings core HR and workforce information together so organizations can manage their people and processes from one connected platform.'
    },


    // =======================================================
    // ARTICLE 2
    // =======================================================

    {
      id: 'hrms-vs-excel',

      title: 'HRMS vs Excel: Why Growing Teams Need More Than Spreadsheets',

      category: 'HR Technology',

      image: 'assets/images/thumbs/blog-page-img2.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '6 min Read',

      excerpt:
        'Discover the challenges of managing employee information and HR processes through spreadsheets and how a centralized HRMS can simplify operations.',

      content: [
        `Spreadsheets can be useful when an organization is small and HR information is limited. As the workforce grows, however, managing employee records and HR activities through multiple spreadsheets can become increasingly difficult.`,

        `HR teams may have to maintain separate files for employee information, attendance, leave, payroll-related data and other HR activities. This can make information harder to maintain consistently and can create unnecessary manual work.`,

        `An HRMS provides a centralized environment where authorized users can manage workforce information and HR processes in a more structured way.`
      ],

      quote:
        'Spreadsheets may help you get started, but structured HR systems help you scale.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'Why Organizations Move from Spreadsheets to HRMS',

      points: [
        'Reduce dependence on manually maintained spreadsheets.',
        'Keep employee information in a centralized system.',
        'Improve consistency across HR records.',
        'Provide controlled access based on user roles.',
        'Connect multiple HR workflows.',
        'Make HR reporting and information retrieval easier.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'Moving from spreadsheets to an HRMS can help organizations create a more structured foundation for workforce management as their HR requirements grow.'
    },


    // =======================================================
    // ARTICLE 3
    // =======================================================

    {
      id: 'digitize-employee-records',

      title: 'How to Digitize Employee Records and HR Information',

      category: 'Employee Management',

      image: 'assets/images/thumbs/blog-page-img3.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '5 min Read',

      excerpt:
        'Learn how structured digital employee records can help HR teams organize profiles, employment information, roles, designations and documents.',

      content: [
        `Employee information is one of the most important resources managed by an HR team. Keeping this information organized and accessible can help HR teams handle everyday workforce operations more effectively.`,

        `Digitizing employee records means moving important employee information into a structured digital system rather than relying on scattered physical documents or disconnected files.`,

        `With a centralized HRMS, organizations can maintain employee profiles, employment information, roles, designations and applicable documents in a more organized environment.`
      ],

      quote:
        'A structured employee record creates a stronger foundation for every HR process that follows.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'Key Benefits of Digital Employee Records',

      points: [
        'Centralized employee profiles.',
        'Structured employment information.',
        'Better organization of employee documents.',
        'Controlled access to workforce information.',
        'Easier employee information retrieval.',
        'Improved visibility for authorized HR users.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'Digitizing employee records can help HR teams create a more organized and searchable workforce information environment while providing a foundation for other HR processes.'
    },


    // =======================================================
    // ARTICLE 4
    // =======================================================

    {
      id: 'attendance-management-best-practices',

      title: 'Attendance Management Best Practices for Modern Organizations',

      category: 'Attendance',

      image: 'assets/images/thumbs/blog-page-img1.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '5 min Read',

      excerpt:
        'Explore practical approaches to organizing attendance and work-related information for HR teams and authorized managers.',

      content: [
        `Attendance information plays an important role in everyday workforce administration. A structured approach can help organizations maintain a consistent view of employee attendance and work-related information.`,

        `Instead of depending on disconnected records, organizations can centralize attendance information within their HRMS environment.`,

        `This gives authorized HR teams and managers a consistent way to access relevant attendance information according to their configured permissions.`
      ],

      quote:
        'Consistent attendance information helps HR teams maintain a clearer view of workforce operations.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'Important Attendance Management Practices',

      points: [
        'Maintain centralized attendance information.',
        'Provide access according to user responsibilities.',
        'Keep attendance records organized.',
        'Reduce unnecessary manual data handling.',
        'Connect attendance information with other HR processes.',
        'Use reports for better workforce visibility.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'A structured attendance management approach can improve visibility and make everyday workforce administration easier for HR teams and authorized managers.'
    },


    // =======================================================
    // ARTICLE 5
    // =======================================================

    {
      id: 'leave-management-best-practices',

      title: 'Leave Management Best Practices for Better HR Operations',

      category: 'Leave Management',

      image: 'assets/images/thumbs/blog-page-img2.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '5 min Read',

      excerpt:
        'Learn how structured leave policies, employee requests and approval workflows can make leave management easier and more transparent.',

      content: [
        `Leave management becomes increasingly important as organizations grow. Employees need a clear process for requesting leave, while HR teams and managers need visibility into requests and approvals.`,

        `A centralized leave management process can help organizations configure applicable leave types and rules while providing a structured workflow for employee requests and approvals.`,

        `With the right access controls, HR teams, managers and employees can interact with leave information according to their responsibilities.`
      ],

      quote:
        'A clear leave process creates better visibility for employees, managers and HR teams.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'Benefits of Structured Leave Management',

      points: [
        'Configure applicable leave types and rules.',
        'Manage employee leave requests.',
        'Simplify approval workflows.',
        'Improve visibility of leave information.',
        'Reduce manual HR administration.',
        'Maintain a consistent leave management process.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'A structured leave management workflow can make leave administration easier for employees, managers and HR teams while improving visibility across the organization.'
    },


    // =======================================================
    // ARTICLE 6
    // =======================================================

    {
      id: 'hr-data-security',

      title: 'HR Data Security: Protecting the Information That Matters',

      category: 'Security',

      image: 'assets/images/thumbs/blog-page-img3.png',

      author: 'PeopleVault',

      authorRole: 'HRMS & Workforce Management',

      date: '21 Aug 2026',

      comments: 0,

      readTime: '6 min Read',

      excerpt:
        'Understand why access control, permissions and responsible handling of workforce information are important for modern HR systems.',

      content: [
        `HR systems contain important employee and organizational information. Because different users have different responsibilities, access to this information should be managed carefully.`,

        `Role and permission management allows organizations to configure what different users can see and do within the platform according to their responsibilities.`,

        `A structured access model can help organizations provide relevant information to authorized users without giving every user unrestricted access to all HR information.`
      ],

      quote:
        'Effective HR data management starts with giving the right information to the right users.',

      quoteAuthor: 'PeopleVault',

      sectionTitle:
        'Important HR Data Security Practices',

      points: [
        'Configure role-based access.',
        'Control access to employee information.',
        'Define user responsibilities clearly.',
        'Limit sensitive information to authorized users.',
        'Review permissions as responsibilities change.',
        'Maintain structured workforce information.'
      ],

      images: [
        'assets/images/thumbs/blog-details-img1.png',
        'assets/images/thumbs/blog-details-img2.png'
      ],

      conclusion:
        'Strong access and permission management is an important part of responsible HR information management. Organizations should ensure that workforce information is available to the right users according to their responsibilities.'
    }

  ];


  // =========================================================
  // SIDEBAR CATEGORIES
  // =========================================================

  categories = [
    {
      name: 'HRMS Guide',
      count: 1
    },
    {
      name: 'HR Technology',
      count: 1
    },
    {
      name: 'Employee Management',
      count: 1
    },
    {
      name: 'Attendance',
      count: 1
    },
    {
      name: 'Leave Management',
      count: 1
    },
    {
      name: 'Security',
      count: 1
    }
  ];


  // =========================================================
  // RECENT ARTICLES
  // =========================================================

 recentNews = [
  {
    img: 'assets/images/thumbs/recent-post-img1.png',
    date: '21 Aug 2026',
    title: 'What Is an HRMS?',
    articleId: 'what-is-an-hrms'
  },
  {
    img: 'assets/images/thumbs/recent-post-img2.png',
    date: '21 Aug 2026',
    title: 'HRMS vs Excel',
    articleId: 'hrms-vs-excel'
  },
  {
    img: 'assets/images/thumbs/recent-post-img3.png',
    date: '21 Aug 2026',
    title: 'How to Digitize Employee Records',
    articleId: 'digitize-employee-records'
  }
];


  // =========================================================
  // POPULAR TAGS
  // =========================================================

  popularTags = [
    'HRMS',
    'Human Resources',
    'Employee Management',
    'Attendance',
    'Leave Management',
    'Payroll',
    'HR Technology',
    'HR Data Security'
  ];


  // =========================================================
  // SOCIAL MEDIA
  // =========================================================

  socials = [
    {
      icon: 'ph-bold ph-instagram-logo',
      link: 'https://www.instagram.com/',
      name: 'Instagram'
    },
    {
      icon: 'ph-bold ph-linkedin-logo',
      link: 'https://www.linkedin.com/',
      name: 'LinkedIn'
    }
  ];


  // =========================================================
  // DECORATIVE TAGS
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
      label: 'HR Technology',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },
    {
      label: 'HR Operations',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },
    {
      label: 'Data Security',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }
  ];


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService,
    private route: ActivatedRoute
  ) {}


  // =========================================================
  // INITIALIZATION
  // =========================================================

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      const articleId = params['article'];

      if (articleId) {

        const article = this.articles.find(
          item => item.id === articleId
        );

        if (article) {
          this.currentArticle = article;
        } else {
          this.currentArticle = this.articles[0];
        }

      } else {

        this.currentArticle = this.articles[0];

      }

    });

  }


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {

    this.animationService.initAnimations();

  }


  // =========================================================
  // TRACK BY
  // =========================================================

  trackByArticleId(
    index: number,
    article: any
  ): string {

    return article.id;

  }


  // =========================================================
  // SHARE ARTICLE
  // =========================================================

  shareArticle(platform: string): void {

    if (!this.currentArticle) {
      return;
    }

    const articleUrl = window.location.href;

    let shareUrl = '';

    switch (platform) {

      case 'instagram':
        // Instagram does not provide a normal web share URL.
        // Open Instagram instead.
        shareUrl = 'https://www.instagram.com/';
        break;

      case 'linkedin':
        shareUrl =
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
        break;

    }

    if (shareUrl) {

      window.open(
        shareUrl,
        '_blank',
        'noopener,noreferrer'
      );

    }

  }

}