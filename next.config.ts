import type { NextConfig } from "next";

// Old industry URLs from the previous site. Most now match the new /industries/<id> pages exactly;
// only the camel-case one needs a redirect.
const industrySlugs: Record<string, string> = {
  realEstate: "real-estate",
};

const nextConfig: NextConfig = {
  experimental: {
    // Needed because /(en) and /(fa)/fa are separate root layouts (different <html lang/dir>).
    globalNotFound: true,
  },
  poweredByHeader: false,
  async redirects() {
    return Object.entries(industrySlugs).flatMap(([oldSlug, id]) => [
      { source: `/industries/${oldSlug}`, destination: `/industries/${id}`, permanent: true },
      { source: `/fa/industries/${oldSlug}`, destination: `/fa/industries/${id}`, permanent: true },
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
