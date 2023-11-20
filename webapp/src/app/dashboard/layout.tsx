import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Pre-built components with awesome default",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
