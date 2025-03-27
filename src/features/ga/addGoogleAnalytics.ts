// const GA_TRACKING_ID = "G-FZJKMYPY7M";
//
// export function addGoogleAnalytics(userConsented: boolean) {
//   if (import.meta.env.VITE_APP_ENV !== "production") return; //.env.production => VITE_APP_ENV=production
//
//   if (!userConsented) return;
//   if (typeof window.gtag === "function") return;
//
//   const script = document.createElement("script");
//   script.async = true;
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
//   document.head.appendChild(script);
//
//   window.dataLayer = window.dataLayer || [];
//   window.gtag = function (command, idOrName, params?) {
//     window.dataLayer.push([command, idOrName, params]);
//   };
//
//   window.gtag("js", new Date());
//   window.gtag("config", GA_TRACKING_ID);
// }
