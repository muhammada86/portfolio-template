import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Aqib - Full Stack MERN Developer & Problem Solver",
  description:
    "Welcome to Muhammad Aqib's portfolio. A passionate Full Stack MERN Developer with expertise in React Native, NestJS, and SaaS application development. Explore projects showcasing problem-solving and innovative solutions.",
  keywords: [
    "Muhammad Aqib",
    "Full Stack Developer",
    "MERN Developer",
    "React Native Developer",
    "NestJS Developer",
    "Portfolio Website",
    "JavaScript Developer",
    "SaaS Application Development",
    "Problem Solver",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
