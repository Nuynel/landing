export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: "config" | "event" | "set" | "js", idOrName: string | Date, params?: Record<string, unknown>) => void;
  }
}
