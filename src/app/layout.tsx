import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono" });

export const metadata: Metadata = {
  title: "Gaurav Shandilya | Full Stack Developer",
  description:
    "Full stack developer working with Node.js, TypeScript, React and React Native.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "NestJS",
    "PostgreSQL",
    "React Native",
    "Gaurav Shandilya",
  ],
  openGraph: {
    title: "Gaurav Shandilya | Full Stack Developer",
    description:
      "Full stack developer working with Node.js, TypeScript, React and React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jbMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
