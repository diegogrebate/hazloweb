import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Insights } from "@/components/insights";

export const metadata: Metadata = {
  title: "Hazlo - Connect, Play, and Inspire | Sports Community",
  description:
    "Join Hazlo, the ultimate sports community to connect with players, create events, and get inspired by like-minded athletes. Discover your passion for sports with Hazlo!",
  keywords: [
    "Hazlo",
    "sports community",
    "connect with players",
    "sports events",
    "athletes",
    "health and fitness",
    "sports app",
    "sports coaching",
  ],
  openGraph: {
    title: "Hazlo - Connect, Play, and Inspire | Sports Community",
    description:
      "Discover a vibrant sports community where you can share your journey, create events, and connect with athletes and coaches. Hazlo empowers you to live healthier and stay active.",
    url: "hazloweb.vercel.app",
    siteName: "Hazlo",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hazlo - Connect, Play, Inspire",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <Insights />
      </body>
    </html>
  );
}
