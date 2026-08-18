declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    offset?: number;
    delay?: number;
    anchorPlacement?: string;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: Aos;
  export = AOS;
}
