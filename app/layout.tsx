import type { Metadata } from "next";
import { Geist, Geist_Mono ,IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets:["latin"],
  weight:['400',"500","600","700"],
  variable:"--font-ibm-plex"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered image generater",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-IBMPLEX antialiased", ibmPlexSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
