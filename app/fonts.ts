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

// Estedad (OFL), files from assets/fonts. Body 500, display 400, emphasis 700/800, semibold 600.
export const estedad = localFont({
  src: [
    { path: "../assets/fonts/estedad-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/estedad-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/estedad-arabic-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/estedad-arabic-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/estedad-arabic-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-estedad",
  display: "swap",
});
