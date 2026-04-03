import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A11Y Testing Web",
  description: "Web accessibility testing suite for WCAG 2.1 compliance — explore patterns, anti-patterns, and interactive examples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
