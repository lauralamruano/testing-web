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
      <body className="bg-green-200 text-black">{children}</body>
    </html>
  );
}
