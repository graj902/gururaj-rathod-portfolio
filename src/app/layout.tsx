import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import the Header component
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gururaj Rathod - DevOps & Cloud Engineer",
  description: "Portfolio of Gururaj Rathod, a DevOps and Cloud Engineer with 8+ years of experience in AWS, Kubernetes, Terraform, and CI/CD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. Add the Header component here */}
        <Header />
        {children}
      </body>
    </html>
  );
}