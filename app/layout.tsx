import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const LeagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Kenny's Portfolio",
  description: "Personal Portfolio built with NextJS and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LeagueSpartan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
