import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Athus Oliveira | Blockchain Developer & Smart Contract Engineer",
  description: "Portfolio of Athus Oliveira. Expert in Solidity, React, and DeFi solutions. 10+ years experience in hardware and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
