import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/utils/themeProvider";


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
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
