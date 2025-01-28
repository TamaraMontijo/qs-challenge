import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from "@/utils/themeProvider";
import ReduxProvider from "@/utils/reduxProvider";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

// Mantemos o metadata no Server Component
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
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
