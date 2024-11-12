import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Hazlo",
  description: "Hazlo Sports",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(montserrat.className, "antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
