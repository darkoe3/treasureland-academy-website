import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { academicLevelLabel, school, seoKeywords } from "@/lib/schoolData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://treasurelandacademy.com"),
  title: {
    default: "Treasureland Academy | Montessori, STEM and ICT School in Kasoa",
    template: "%s | Treasureland Academy"
  },
  description:
    `Treasureland Academy provides high-quality ${academicLevelLabel} education in Kasoa-Brigade, combining Montessori learning, STEM, ICT, character development and sustainability.`,
  keywords: seoKeywords,
  openGraph: {
    title: "Treasureland Academy | Montessori, STEM and ICT School in Kasoa",
    description:
      `High-quality ${academicLevelLabel} education in Kasoa-Brigade with Montessori learning, STEM, ICT and character development.`,
    url: "https://treasurelandacademy.com",
    siteName: "Treasureland Academy",
    images: [
      {
        url: "/images/web/hero-school.jpg",
        width: 3024,
        height: 3100,
        alt: "Treasureland Academy campus building and courtyard"
      }
    ],
    locale: "en_GH",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
