import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

// Self-hosted at build time by next/font.
// Plus Jakarta Sans is a variable font: one file covers every weight (300–800).
// display: "optional" (owner decision): the preloaded font is used if it arrives within the first
// ~100ms, otherwise the metric-matched fallback stays for that view, so the hero headline is never
// re-painted by a late font swap (better LCP on slow mobile). Repeat visits get it from cache.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "optional",
});

// Mono is only used for small English labels, so it is not preloaded.
export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

// Persian (/fa only). Both OFL, files and licences in app/fonts/.
// The CSS stacks built on these are --font-fa-display and --font-fa-body (globals.css @theme).
// next/font emits a metric-matched fallback face for each (size-adjust etc.), so the swap doesn't shift layout.

// Lalezar: display only (headlines, big numbers). A single weight: never bold it.
export const lalezar = localFont({
  src: "./fonts/lalezar/Lalezar-400.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-lalezar",
  display: "swap",
  preload: true,
});

// Estedad: everything else. Body 700, UI 800, captions 500–600, small emphasis 900.
// next/font preloads per family, not per weight, so this family is not preloaded (six files);
// it is requested as soon as the stylesheet is parsed.
export const estedad = localFont({
  src: [
    { path: "./fonts/estedad/Estedad-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/estedad/Estedad-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/estedad/Estedad-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/estedad/Estedad-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/estedad/Estedad-800.woff2", weight: "800", style: "normal" },
    { path: "./fonts/estedad/Estedad-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-estedad",
  display: "swap",
  preload: false,
});
