import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "威威威 ♥ 琴琴琴 | 我们的故事",
  description: "记录我们的恋爱生活",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-cream antialiased">{children}</body>
    </html>
  );
}
