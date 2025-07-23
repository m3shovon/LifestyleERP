import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LifestyleERP - ERP Systems, Cybersecurity & Digital Marketing",
  description:
    "Leading provider of ERP systems for fashion, retail, restaurant & lifestyle brands. Comprehensive solutions including HRM, Accounting, CRM, POS, Inventory, Cybersecurity & Digital Marketing services.",
  keywords:
    "ERP systems, fashion ERP, retail management, restaurant POS, HRM software, accounting software, CRM, inventory management, cybersecurity, digital marketing, business solutions",
  authors: [{ name: "LifestyleERP" }],
  creator: "LifestyleERP",
  publisher: "LifestyleERP",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lifestyleerp.com",
    title: "LifestyleERP - Enterprise Software & Digital Solutions",
    description:
      "Transform your business with our comprehensive ERP systems, cybersecurity solutions, and digital marketing services tailored for modern enterprises.",
    siteName: "LifestyleERP",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifestyleERP - Enterprise Software & Digital Solutions",
    description:
      "Transform your business with our comprehensive ERP systems, cybersecurity solutions, and digital marketing services.",
    creator: "@techflowsolutions",
  },
  alternates: {
    canonical: "https://techflowsolutions.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7a0606ff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
