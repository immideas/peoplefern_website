import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [Breadcrumb, CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements AfterViewInit {

  // =========================================================
  // PEOPLEVAULT BLOG ARTICLES
  // =========================================================

blogs = [
  {
    id: 1,
    articleId: 'what-is-an-hrms',
    image: 'assets/images/thumbs/blog-page-img1.png',
    category: 'HRMS Guide',
    title: 'What Is an HRMS? A Complete Guide for Modern HR Teams',
    excerpt:
      'Understand how an HRMS can bring employee records, attendance, leave, payroll and workforce operations together in one centralized platform.'
  },

  {
    id: 2,
    articleId: 'hrms-vs-excel',
    image: 'assets/images/thumbs/blog-page-img2.png',
    category: 'HR Technology',
    title: 'HRMS vs Excel: Why Growing Teams Need More Than Spreadsheets',
    excerpt:
      'Discover the challenges of managing employee information and HR processes through spreadsheets and how a centralized HRMS can simplify operations.'
  },

  {
    id: 3,
    articleId: 'digitize-employee-records',
    image: 'assets/images/thumbs/blog-page-img3.png',
    category: 'Employee Management',
    title: 'How to Digitize Employee Records and HR Information',
    excerpt:
      'Learn how structured digital employee records can help HR teams organize profiles, employment information, roles, designations and documents.'
  },

  {
    id: 4,
    articleId: 'attendance-management-best-practices',
    image: 'assets/images/thumbs/blog-page-img1.png',
    category: 'Attendance',
    title: 'Attendance Management Best Practices for Modern Organizations',
    excerpt:
      'Explore practical approaches to organizing attendance and work-related information for HR teams and authorized managers.'
  },

  {
    id: 5,
    articleId: 'leave-management-best-practices',
    image: 'assets/images/thumbs/blog-page-img2.png',
    category: 'Leave Management',
    title: 'Leave Management Best Practices for Better HR Operations',
    excerpt:
      'Learn how structured leave policies, employee requests and approval workflows can make leave management easier and more transparent.'
  },

  {
    id: 6,
    articleId: 'hr-data-security',
    image: 'assets/images/thumbs/blog-page-img3.png',
    category: 'Security',
    title: 'HR Data Security: Protecting the Information That Matters',
    excerpt:
      'Understand why access control, permissions and responsible handling of workforce information are important for modern HR systems.'
  }
];


  // =========================================================
  // PEOPLEVAULT BRAND / AUTHOR
  // =========================================================

  author = {
    image: 'assets/images/logo/favicon.png',
    name: 'PeopleVault',
    role: 'HRMS & Workforce Management',
    bio:
      'PeopleVault shares practical HR guidance, product education and insights to help organizations simplify workforce management.',
    socials: [
      {
        icon: 'ph ph-instagram-logo',
        link: 'https://www.instagram.com/'
      },
      {
        icon: 'ph ph-linkedin-logo',
        link: 'https://www.linkedin.com/'
      }
    ]
  };


  // =========================================================
  // LATEST ARTICLES
  // =========================================================

  recentPosts = [
  {
    image: 'assets/images/thumbs/recent-post-img1.png',
    category: 'HRMS Guide',
    title: 'What Is an HRMS?',
    articleId: 'what-is-an-hrms'
  },

  {
    image: 'assets/images/thumbs/recent-post-img2.png',
    category: 'HR Technology',
    title: 'HRMS vs Excel',
    articleId: 'hrms-vs-excel'
  },

  {
    image: 'assets/images/thumbs/recent-post-img3.png',
    category: 'Employee Management',
    title: 'How to Digitize Employee Records',
    articleId: 'digitize-employee-records'
  }
];


  // =========================================================
  // BLOG CATEGORIES
  // =========================================================

  categories = [
    {
      name: 'HRMS Guide',
      count: 1,
      link: '/blog'
    },

    {
      name: 'HR Technology',
      count: 1,
      link: '/blog'
    },

    {
      name: 'Employee Management',
      count: 1,
      link: '/blog'
    },

    {
      name: 'Attendance',
      count: 1,
      link: '/blog'
    },

    {
      name: 'Leave Management',
      count: 1,
      link: '/blog'
    },

    {
      name: 'Security',
      count: 1,
      link: '/blog'
    }
  ];


  // =========================================================
  // POPULAR TAGS
  // =========================================================

  tags = [
    {
      name: 'HRMS',
      link: '/blog'
    },

    {
      name: 'Human Resources',
      link: '/blog'
    },

    {
      name: 'Employee Management',
      link: '/blog'
    },

    {
      name: 'Attendance',
      link: '/blog'
    },

    {
      name: 'Leave Management',
      link: '/blog'
    },

    {
      name: 'Payroll',
      link: '/blog'
    },

    {
      name: 'HR Technology',
      link: '/blog'
    },

    {
      name: 'HR Data Security',
      link: '/blog'
    }
  ];


  // =========================================================
  // CTA / DECORATIVE TAGS
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
  private router: Router
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

  trackByBlogId(
    index: number,
    blog: { id: number }
  ): number {
    return blog.id;
  }
debugArticle(articleId: string): void {
  console.log('CLICKED:', articleId);

  this.router.navigate(['/blog-details'], {
    queryParams: {
      article: articleId
    }
  }).then(
    success => {
      console.log('Navigation success:', success);
      console.log('Router URL:', this.router.url);
    },
    error => {
      console.error('Navigation failed:', error);
    }
  );
}
}