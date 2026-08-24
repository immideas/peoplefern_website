import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { AnimationService } from '../../services/animation';
import { PublicPlansService } from '../../services/public-plans';


// ============================================================
// PLAN FEATURE
// ============================================================

interface PlanFeature {
  feature_id?: number;
  enabled?: boolean;
  value?: string;
  value_type?: string;
  value_period?: string;

  feature?: {
    id?: number;
    feature_name?: string;
    name?: string;
    description?: string;
  };
}


// ============================================================
// API PLAN
// ============================================================

interface ApiPlan {
  id: number;

  plan_code: string;

  plan_name: string;

  description?: string | null;

  no_of_users?: number | string;

  max_admins?: number;

  setup_cost?: number | string;

  plan_price?: number | string;

  billing_cycle: 'Monthly' | 'Yearly';

  days?: number;

  buffer_days?: number;

  purge_days?: number;

  is_trial_plan?: boolean;

  trial_days?: number;

  is_popular?: boolean;

  is_default?: boolean;

  plan_icon?: string;

  razorpay_plan_id?: string | null;

  plan_features?: PlanFeature[];
}


// ============================================================
// GROUPED PRICING PLAN
// ============================================================

interface PricingPlanData {

  plan_code: string;

  plan_name: string;

  description: string;

  // Billing versions
  monthly: ApiPlan | null;

  yearly: ApiPlan | null;

  // Billing selected for THIS CARD
  selectedBillingCycle: 'Monthly' | 'Yearly';

  // UI
  is_default: boolean;

  is_popular: boolean;

  features: PlanFeature[];

  aosDuration: number;
}


// ============================================================
// COMPONENT
// ============================================================

@Component({
  selector: 'app-pricing-plan',

  imports: [
    Breadcrumb,
    CommonModule
  ],

  templateUrl: './pricing-plan.html',

  styleUrl: './pricing-plan.css',
})
export class PricingPlan
  implements OnInit, AfterViewInit {


  // ==========================================================
  // PRICING DATA
  // ==========================================================

  pricingPlans: PricingPlanData[] = [];


  // ==========================================================
  // UI STATE
  // ==========================================================

  loading = true;

  errorMessage = '';


  // ==========================================================
  // CONSTRUCTOR
  // ==========================================================

  constructor(
    private animationService: AnimationService,
    private publicPlansService: PublicPlansService
  ) {}


  // ==========================================================
  // INIT
  // ==========================================================

  ngOnInit(): void {
    this.loadPlans();
  }


  // ==========================================================
  // AFTER VIEW INIT
  // ==========================================================

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }


  // ==========================================================
  // LOAD PUBLIC PLANS
  // ==========================================================

  loadPlans(): void {

    this.loading = true;

    this.errorMessage = '';

    this.publicPlansService
      .getPublicPricingPlans()
      .subscribe({

        next: (response: any) => {

          console.log(
            'Public Pricing API Response:',
            response
          );


          const apiPlans: ApiPlan[] =
            Array.isArray(response)
              ? response
              : response?.data ||
                response?.plans ||
                response?.result ||
                [];


          console.log(
            'Public API Plans:',
            apiPlans
          );


          this.pricingPlans =
            this.groupPlans(apiPlans);


          this.loading = false;


          console.log(
            'Grouped Public Pricing Plans:',
            this.pricingPlans
          );

        },


        error: (error: any) => {

          console.error(
            'Pricing API Error:',
            error
          );


          this.loading = false;


          this.errorMessage =
            'Unable to load pricing plans. Please try again later.';

        }

      });

  }


  // ==========================================================
  // GROUP MONTHLY + YEARLY
  // ==========================================================

  private groupPlans(
    plans: ApiPlan[]
  ): PricingPlanData[] {

    const grouped:
      Record<string, PricingPlanData> = {};


    plans.forEach(
      (
        plan: ApiPlan,
        index: number
      ) => {

        const planCode =
          plan.plan_code;


        // ====================================================
        // CREATE GROUP
        // ====================================================

        if (!grouped[planCode]) {

          grouped[planCode] = {

            plan_code:
              planCode,

            plan_name:
              plan.plan_name ||
              'Plan',

            description:
              plan.description ||
              'Flexible pricing designed for your business.',

            monthly:
              null,

            yearly:
              null,

            // First available billing cycle
            selectedBillingCycle:
              plan.billing_cycle,

            is_default:
              plan.is_default === true,

            is_popular:
              plan.is_popular === true,

            features:
              plan.plan_features || [],

            aosDuration:
              600 + index * 150

          };

        }


        // ====================================================
        // MONTHLY
        // ====================================================

        if (
          plan.billing_cycle === 'Monthly'
        ) {

          grouped[planCode].monthly =
            plan;

        }


        // ====================================================
        // YEARLY
        // ====================================================

        if (
          plan.billing_cycle === 'Yearly'
        ) {

          grouped[planCode].yearly =
            plan;

        }


        // ====================================================
        // DEFAULT
        // ====================================================

        if (
          plan.is_default === true
        ) {

          grouped[planCode].is_default =
            true;

        }


        // ====================================================
        // POPULAR
        // ====================================================

        if (
          plan.is_popular === true
        ) {

          grouped[planCode].is_popular =
            true;

        }


        // ====================================================
        // FEATURES
        // ====================================================

        if (
          plan.plan_features &&
          plan.plan_features.length > 0
        ) {

          const currentSelection =
            grouped[planCode]
              .selectedBillingCycle;


          if (
            plan.billing_cycle ===
            currentSelection
          ) {

            grouped[planCode].features =
              plan.plan_features;

          }

          else if (
            grouped[planCode]
              .features.length === 0
          ) {

            grouped[planCode].features =
              plan.plan_features;

          }

        }

      }
    );


    // ========================================================
    // SAFETY CHECK
    // If selected billing cycle doesn't exist,
    // automatically select the available one.
    // ========================================================

    Object.values(grouped)
      .forEach(
        (
          plan: PricingPlanData
        ) => {


          // Monthly selected but only Yearly exists
          if (
            plan.selectedBillingCycle ===
              'Monthly' &&
            !plan.monthly &&
            plan.yearly
          ) {

            plan.selectedBillingCycle =
              'Yearly';

            plan.features =
              plan.yearly.plan_features || [];

          }


          // Yearly selected but only Monthly exists
          if (
            plan.selectedBillingCycle ===
              'Yearly' &&
            !plan.yearly &&
            plan.monthly
          ) {

            plan.selectedBillingCycle =
              'Monthly';

            plan.features =
              plan.monthly.plan_features || [];

          }

        }
      );


    return Object.values(grouped);

  }


  // ==========================================================
  // GET CURRENT PLAN FOR THIS CARD
  // ==========================================================

  getCurrentPlan(
    plan: PricingPlanData
  ): ApiPlan | null {

    if (
      plan.selectedBillingCycle ===
      'Monthly'
    ) {

      return plan.monthly;

    }

    return plan.yearly;

  }


  // ==========================================================
  // GET PRICE
  // ==========================================================

  getPrice(
    plan: PricingPlanData
  ): string {

    const currentPlan =
      this.getCurrentPlan(plan);


    if (!currentPlan) {

      return '0';

    }


    return this.formatPrice(
      currentPlan.plan_price
    );

  }


  // ==========================================================
  // FORMAT PRICE
  // ==========================================================

  formatPrice(
    price:
      number |
      string |
      undefined
  ): string {

    if (
      price === undefined ||
      price === null ||
      price === ''
    ) {

      return '0';

    }


    const numericPrice =
      Number(price);


    if (
      Number.isNaN(
        numericPrice
      )
    ) {

      return '0';

    }


    return new Intl.NumberFormat(
      'en-IN',
      {
        maximumFractionDigits: 0
      }
    ).format(
      numericPrice
    );

  }


  // ==========================================================
  // GET PERIOD
  // ==========================================================

  getPeriod(
    plan: PricingPlanData
  ): string {

    return plan.selectedBillingCycle ===
      'Monthly'

      ? '/month'

      : '/year';

  }


  // ==========================================================
  // GET USER LIMIT
  // ==========================================================

  getUserLimit(
    plan: PricingPlanData
  ): string {

    const currentPlan =
      this.getCurrentPlan(plan);


    if (!currentPlan) {

      return '';

    }


    if (
      currentPlan.no_of_users ===
        undefined ||
      currentPlan.no_of_users ===
        null
    ) {

      return '';

    }


    return `${currentPlan.no_of_users} employees`;

  }


  // ==========================================================
  // FEATURE NAME
  // ==========================================================

  getFeatureName(
    feature: PlanFeature
  ): string {

    return (

      feature.feature?.feature_name ||

      feature.feature?.name ||

      `Feature ${
        feature.feature_id ?? ''
      }`

    );

  }


  // ==========================================================
  // FEATURE VALUE
  // ==========================================================

  getFeatureValue(
    feature: PlanFeature
  ): string {

    if (
      feature.value_type ===
      'unlimited'
    ) {

      return 'Unlimited';

    }


    if (
      feature.value &&
      feature.value !== '0'
    ) {

      return feature.value;

    }


    return '';

  }


  // ==========================================================
  // CHECK PLAN AVAILABLE
  // ==========================================================

  isPlanAvailable(
    plan: PricingPlanData
  ): boolean {

    return !!this.getCurrentPlan(
      plan
    );

  }


  // ==========================================================
  // CHECK MONTHLY AVAILABLE
  // ==========================================================

  hasMonthly(
    plan: PricingPlanData
  ): boolean {

    return !!plan.monthly;

  }


  // ==========================================================
  // CHECK YEARLY AVAILABLE
  // ==========================================================

  hasYearly(
    plan: PricingPlanData
  ): boolean {

    return !!plan.yearly;

  }


  // ==========================================================
  // CARD BILLING TOGGLE
  // ==========================================================

  selectPlanBilling(
    plan: PricingPlanData,

    cycle:
      'Monthly' |
      'Yearly'
  ): void {


    // Don't allow Monthly if
    // this plan doesn't have Monthly

    if (
      cycle === 'Monthly' &&
      !plan.monthly
    ) {

      return;

    }


    // Don't allow Yearly if
    // this plan doesn't have Yearly

    if (
      cycle === 'Yearly' &&
      !plan.yearly
    ) {

      return;

    }


    // Change billing for this card only

    plan.selectedBillingCycle =
      cycle;


    // Update features

    const currentPlan =
      this.getCurrentPlan(
        plan
      );


    if (
      currentPlan?.plan_features
    ) {

      plan.features =
        currentPlan.plan_features;

    }


    console.log(
      'Billing changed:',
      {
        plan: plan.plan_name,

        billingCycle:
          plan.selectedBillingCycle,

        price:
          currentPlan?.plan_price
      }
    );

  }


  // ==========================================================
  // GET ALL FEATURES
  // ==========================================================

  getAllFeatures(): PlanFeature[] {

    const featureMap =
      new Map<number, PlanFeature>();


    this.pricingPlans.forEach(
      (
        plan: PricingPlanData
      ) => {

        plan.features.forEach(
          (
            feature: PlanFeature
          ) => {

            if (
              feature.feature_id !==
                undefined &&
              !featureMap.has(
                feature.feature_id
              )
            ) {

              featureMap.set(
                feature.feature_id,
                feature
              );

            }

          }
        );

      }
    );


    return Array.from(
      featureMap.values()
    );

  }


  // ==========================================================
  // CHECK IF FEATURE EXISTS IN PLAN
  // ==========================================================

  hasFeature(
    plan: PricingPlanData,

    featureId?: number
  ): boolean {

    if (
      featureId ===
      undefined
    ) {

      return false;

    }


    return plan.features.some(
      (
        feature: PlanFeature
      ) =>

        feature.feature_id ===
          featureId &&

        feature.enabled !== false

    );

  }


  // ==========================================================
  // GET SPECIFIC PLAN FEATURE
  // ==========================================================

  getPlanFeature(
    plan: PricingPlanData,

    featureId?: number
  ): PlanFeature | null {

    if (
      featureId ===
      undefined
    ) {

      return null;

    }


    return (

      plan.features.find(
        (
          feature: PlanFeature
        ) =>

          feature.feature_id ===
          featureId

      ) || null

    );

  }


  // ==========================================================
  // GET SPECIFIC PLAN FEATURE VALUE
  // ==========================================================

  getPlanFeatureValue(
    plan: PricingPlanData,

    featureId?: number
  ): string {

    const feature =
      this.getPlanFeature(
        plan,
        featureId
      );


    if (
      !feature ||
      feature.enabled === false
    ) {

      return '';

    }


    return this.getFeatureValue(
      feature
    );

  }
  scrollToComparison(): void {
  const element = document.getElementById('pricing-comparison');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


  // ==========================================================
  // SELECT PLAN
  // ==========================================================

  selectPlan(
    plan: PricingPlanData
  ): void {

    const currentPlan =
      this.getCurrentPlan(
        plan
      );


    if (!currentPlan) {

      return;

    }


    console.log(
      'Selected Plan:',
      currentPlan
    );


    console.log(
      'Plan ID:',
      currentPlan.id
    );


    console.log(
      'Plan Code:',
      currentPlan.plan_code
    );


    console.log(
      'Plan Name:',
      currentPlan.plan_name
    );


    console.log(
      'Billing Cycle:',
      currentPlan.billing_cycle
    );


    console.log(
      'Price:',
      currentPlan.plan_price
    );


    console.log(
      'Razorpay Plan ID:',
      currentPlan.razorpay_plan_id
    );


    /*
     * PAYMENT WILL BE CONNECTED LATER.
     *
     * IMPORTANT:
     *
     * Do NOT trust price from frontend.
     *
     * Send only currentPlan.id
     * to your backend.
     *
     * Backend should fetch:
     *
     * plans.id
     * plans.plan_price
     * plans.billing_cycle
     * plans.razorpay_plan_id
     *
     * directly from database.
     */

  }

}