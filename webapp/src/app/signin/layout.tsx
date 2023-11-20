import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Pre-built components with awesome default",
};

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
