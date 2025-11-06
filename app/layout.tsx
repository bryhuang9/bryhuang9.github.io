import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Huang | Software Engineer Portfolio",
  description: "Computer Science student at UC Davis passionate about building innovative solutions. View my projects, experience, and get in touch.",
  keywords: ["Brian Huang", "Software Engineer", "UC Davis", "Computer Science", "Portfolio"],
  authors: [{ name: "Brian Huang" }],
  openGraph: {
    title: "Brian Huang | Software Engineer Portfolio",
    description: "Computer Science student at UC Davis passionate about building innovative solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
