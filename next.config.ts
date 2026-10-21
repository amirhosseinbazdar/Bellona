import type { NextConfig } from "next";

// Old industry pages (empty "coming soon" pages on the previous site) → anchors on /industries.
const industrySlugs: Record<string, string> = {
  realEstate: "real-estate",
  finance: "finance",
  healthcare: "healthcare",
  ecommerce: "ecommerce",
  consulting: "consulting",
  education: "education",
};

const nextConfig: NextConfig = {
  experimental: {
    // Needed because /(en) and /(fa)/fa are separate root layouts (different <html lang/dir>).
    globalNotFound: true,
  },
  poweredByHeader: false,
  async redirects() {
    return Object.entries(industrySlugs).flatMap(([oldSlug, anchor]) => [
      { source: `/industries/${oldSlug}`, destination: `/industries#${anchor}`, permanent: true },
      { source: `/fa/industries/${oldSlug}`, destination: `/fa/industries#${anchor}`, permanent: true },
    ]);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
