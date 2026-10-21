import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";
import { estedad, jakarta, jetbrains } from "../../fonts";
import { baseMetadata } from "@/lib/metadata";
import "../../globals.css";

export const metadata: Metadata = baseMetadata("fa");

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function FaLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="fa" fontVars={`${estedad.variable} ${jakarta.variable} ${jetbrains.variable}`}>{children}</SiteShell>;
}
