export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://bellonaagency.com").replace(/\/$/, "");

/** External booking link, or null when not configured (CTAs then fall back to /contact). */
export const bookingUrl = process.env.BOOKING_URL?.trim() || null;

export const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim() || null;
