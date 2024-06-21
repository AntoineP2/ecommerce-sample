import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./themeProvider";;
import Header from "@/components/header/Header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manga Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-screen`}>
        <ThemeProvider>
          <div className="w-screen h-[70px] shadow-lg bg-base-100 mb-20 md:py-5 fixed z-50">
            <Header />
          </div>
          <div className="pt-[5%] z-30">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
