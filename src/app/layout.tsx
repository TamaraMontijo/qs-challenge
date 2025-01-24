import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/utils/themeProvider";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});



export const metadata: Metadata = {
  title: "QuikServe Frontend Challenge",
  description: "whitelabel application for restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
