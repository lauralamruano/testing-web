import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Testing Ally Web",
  description: "Detector",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-black bg-green-gradient">{children}</body>
    </html>
  );
}
