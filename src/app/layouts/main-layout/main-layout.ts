
import { AfterViewInit, Component, Type } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TopHeader } from '../top-header/top-header';
import { Header } from '../header/header';
import { HeaderTwo } from '../header-two/header-two';
import { HeaderThree } from '../header-three/header-three';
import { HeaderFour } from '../header-four/header-four';
import { HeaderFive } from '../header-five/header-five';
import { HeaderSix } from '../header-six/header-six';
import { Footer } from '../footer/footer';
import { FooterSix } from '../footer-six/footer-six';
import { FooterFive } from '../footer-five/footer-five';
import { FooterTwo } from '../footer-two/footer-two';
import { FooterThree } from '../footer-three/footer-three';
import { FooterFour } from '../footer-four/footer-four';
import { TopHeaderTwo } from '../top-header-two/top-header-two';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { SettingPanel } from '../setting-panel/setting-panel';
import { AnimationService } from '../../services/animation';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NgComponentOutlet, SettingPanel, CommonModule],
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout implements AfterViewInit {
  headerComponent!: Type<any>;
  footerComponent!: Type<any>;
  topHeaderComponent: Type<any> | null = null;
  headerInputs: any = {};
  footerInputs: any = {};


  headerMap: { [key: string]: Type<any> } = {
    header1: Header,
    header2: HeaderTwo,
    header3: HeaderThree,
    header4: HeaderFour,
    header5: HeaderFive,
    header6: HeaderSix,
  };
  footerMap: { [key: string]: Type<any> } = {
    footer1: Footer,
    footer2: FooterTwo,
    footer3: FooterThree,
    footer4: FooterFour,
    footer5: FooterFive,
    footer6: FooterSix,
  };
  topHeaderMap: { [key: string]: Type<any> } = {
    topHeader1: TopHeader,
    topHeader2: TopHeaderTwo,
  };

 constructor(
  private router: Router,
  private route: ActivatedRoute,
  private animationService: AnimationService
) {
  this.router.events
    .pipe(
      filter(
        (event): event is NavigationEnd =>
          event instanceof NavigationEnd
      )
    )
    .subscribe(() => {

      // Reload header/footer according to new route
      this.loadLayoutComponents();

      // Always start the new page from the top
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      }

    });
}

  ngOnInit() {
    this.loadLayoutComponents();
  }

  private loadLayoutComponents() {
    const childRoute = this.getChild(this.route);
    const headerKey = childRoute.snapshot.data['header'] || 'header1';
    const footerKey = childRoute.snapshot.data['footer'] || 'footer1';
    const topHeaderKey = childRoute.snapshot.data['topHeader'] || null;

    const headerProps = childRoute.snapshot.data['headerProps'] || {};
    const footerProps = childRoute.snapshot.data['footerProps'] || {};
    this.headerComponent = this.headerMap[headerKey];
    this.footerComponent = this.footerMap[footerKey];

    // ✅ Only set top header if defined in route
    this.topHeaderComponent = topHeaderKey ? this.topHeaderMap[topHeaderKey] : null;

    this.headerInputs = headerProps;
    this.footerInputs = footerProps;
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }
  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

}
