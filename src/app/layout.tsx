import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Lễ Tốt Nghiệp | Trân trọng kính mời",
  description: "Website mời tham dự lễ tốt nghiệp ngày 09.06.2026 tại UIT, TP.HCM. Một buổi lễ ấm, sang và có điểm nhấn riêng.",
  keywords: ["lễ tốt nghiệp", "graduation", "UIT", "2026"],
  authors: [{ name: "Graduation Ceremony" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://graduation.example.com",
    siteName: "Lễ Tốt Nghiệp 2026",
    title: "Lễ Tốt Nghiệp của Khoa",
    description: "Lễ tốt nghiệp ngày 09.06.2026 tại UIT, rất mong các bạn đến dự.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lễ Tốt Nghiệp 2026",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lễ Tốt Nghiệp | Trân trọng kính mời",
    description: "Lễ tốt nghiệp ngày 09.06.2026 tại UIT, TP.HCM",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://graduation.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head />
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#f7f1e8] text-[#1f2937] font-sans transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}