import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PreviewModalProvider } from "@/providers/preview-modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
  description: "Public storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist} antialiased`}>
        <PreviewModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
