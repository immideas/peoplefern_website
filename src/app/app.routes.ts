import { Routes } from '@angular/router';
import { Index } from './Home/index/index';
import { Index2 } from './Home/index-2/index-2';
import { Index3 } from './Home/index-3/index-3';
import { Index4 } from './Home/index-4/index-4';
import { Index5 } from './Home/index-5/index-5';
import { Index6 } from './Home/index-6/index-6';
import { PricingPlan } from './Pages/pricing-plan/pricing-plan';
import { About } from './Pages/about/about';
import { AppIntigration } from './Pages/app-intigration/app-intigration';
import { IntigrationDetails } from './Pages/intigration-details/intigration-details';
import { MainLayout } from './layouts/main-layout/main-layout';
import { BlogDetails } from './Pages/blog-details/blog-details';
import { Blog } from './Pages/blog/blog';
import { Cart } from './Pages/cart/cart';
import { Checkout } from './Pages/checkout/checkout';
import { Contact } from './Pages/contact/contact';
import { Faq } from './Pages/faq/faq';
import { Login } from './Pages/login/login';
import { PolicyPrivacy } from './Pages/policy-privacy/policy-privacy';
import { ProjectDetails } from './Pages/project-details/project-details';
import { Register } from './Pages/register/register';
import { ServiceDetails } from './Pages/service-details/service-details';
import { ShopDetails } from './Pages/shop-details/shop-details';
import { Shop } from './Pages/shop/shop';
import { HelpCenter } from './Pages/help-center/help-center';
import { BookDemo } from './Pages/book-demo/book-demo';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'index-2',
        component: Index2,
        data: {
          pageClass: 'home-two',
          header: 'header2',
          headerProps: {
            headerClass: 'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-13',
            logoText: 'logo.png',
            navMenu: 'nav-menu-two',
            btnClass: 'rounded-pill btn-main hover-style-one',
          },
          footer: 'footer2',
          topHeader: 'topHeader2',
        },
      },
      {
        path: 'index-3',
        component: Index3,
        data: {
          pageClass: 'home-three crm-page',
          header: 'header3',
          footer: 'footer3',
          footerProps: {
            sectionClass: 'bg-pink-more-light',
          },
        },
      },
      {
        path: 'home',
        component: Index4,
        data: {
          pageClass: 'home-crm heading-black',
          header: 'header2',
          headerProps: {
            headerClass: 'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-13 position-absolute',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'rounded-pill btn-main hover-style-one common-shadow-inset-one',
          },
          footer: 'footer4',
        },
      },
      {
        path: 'index-5',
        component: Index5,
        data: {
          pageClass: 'home-five',
          header: 'header5',
          footer: 'footer5',
          topHeader: 'topHeader1',
        },
      },
      {
        path: 'index-6',
        component: Index6,
        data: {
          pageClass: 'home-six',
          header: 'header6',
          footer: 'footer6',
        },
      },
      {
        path: 'pricing',
        component: PricingPlan,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
            navMenu: 'nav-menu',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'about',
        component: About,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
            navMenu: 'nav-menu',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'features',
        component: AppIntigration,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'feature-details',
        component: IntigrationDetails,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'blog-details',
        component: BlogDetails,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'blog',
        component: Blog,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'compare',
        component: Cart,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'security',
        component: Checkout,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'contact',
        component: Contact,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
  path: 'book-demo',
  component: BookDemo,
  data: {
    pageClass: 'heading-black',
    header: 'header2',
    headerProps: {
      headerClass:
        'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
      logoText: 'logo-four.png',
      navMenu: 'nav-menu',
      btnClass: 'tw-rounded-xl btn-main-two hover-style-two'
    },
    footer: 'footer4',
    footerProps: {
      sectionClass: 'bg-neutral-light'
    }
  }
},
      {
        path: 'faq',
        component: Faq,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'login',
        component: Login,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'policy-privacy',
        component: PolicyPrivacy,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'case-studies',
        component: ProjectDetails,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'help-center',
        component: HelpCenter,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'register',
        component: Register,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'sitemap',
        component: ServiceDetails,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'eula',
        component: ShopDetails,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      {
        path: 'terms-and-conditions',
        component: Shop,
        data: {
          pageClass: 'heading-black',
          header: 'header2',
          headerProps: {
            headerClass:
              'py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-9 position-absolute header-inner-page',
            logoText: 'logo-four.png',
            navMenu: 'nav-menu',
            btnClass: 'tw-rounded-xl btn-main-two hover-style-two',
          },
          footer: 'footer4',
          footerProps: {
            sectionClass: 'bg-neutral-light',
          },
        },
      },
      // { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
  },
];
