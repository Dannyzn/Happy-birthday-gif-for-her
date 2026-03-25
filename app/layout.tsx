import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "海外华人文化贺卡",
  description: "传递温暖，连接心意",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
