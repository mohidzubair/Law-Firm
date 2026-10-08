import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://zubairlawfirm.com"),
  title: {
    default: "Zubair Law Firm | Top Lawyers & Advocates in Lahore | Adv. Zubair Mahmood",
    template: "%s | Zubair Law Firm Lahore",
  },
  description:
    "Zubair Law Firm is a premier law firm in Lahore founded by Senior Advocate High Court Zubair Mahmood. Over 25 years of courtroom mastery in Family Law, Khula, Criminal Defence, Property Litigation, Tax Appeals, and Overseas Legal Services.",
  keywords: [
    "Zubair Law Firm",
    "Advocate Zubair Mahmood",
    "Lawyers in Lahore",
    "Best Law Firm Lahore",
    "Family Lawyer Lahore",
    "Khula Lawyer Lahore",
    "Criminal Lawyer Lahore High Court",
    "Property Dispute Lawyer Lahore",
    "Tax Lawyer Lahore FBR",
    "Overseas Pakistanis Power of Attorney",
    "Saleemi Chambers Lahore",
    "DHA Lahore Lawyers",
  ],
  authors: [{ name: "Advocate Zubair Mahmood" }],
  creator: "Zubair Law Firm",
  publisher: "Zubair Law Firm",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://zubairlawfirm.com",
    title: "Zubair Law Firm | Lawyers in Lahore | Adv. Zubair Mahmood",
    description:
      "25+ years courtroom experience. Founder: Senior Advocate High Court Zubair Mahmood. Specializing in Family, Criminal, Property, Tax, & Corporate Law.",
    siteName: "Zubair Law Firm Lahore",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Zubair Law Firm Lahore Chambers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubair Law Firm | Top Lawyers in Lahore",
    description:
      "Over 25 years of legal excellence. Lead Counsel: Advocate Zubair Mahmood (High Court).",
    images: ["/images/hero_bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased min-h-screen flex flex-col selection:bg-slate-900 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
