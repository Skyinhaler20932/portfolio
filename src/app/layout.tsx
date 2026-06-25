import type { Metadata } from "next";
import { Calistoga, Courier_Prime } from 'next/font/google';
import "./globals.css";

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Youssef Moussa — DevOps Engineer",
  description: "DevOps engineer crafting scalable infrastructure, automation, and reliable deployments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calistoga.variable} ${courierPrime.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
