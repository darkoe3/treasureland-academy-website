import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { school, seoKeywords } from "@/lib/schoolData";

export const metadata = {
  metadataBase: new URL("https://treasurelandacademy.com"),
  title: {
    default: "Treasureland Academy | Montessori, STEM and ICT School in Kasoa",
    template: "%s | Treasureland Academy"
  },
  description:
    "Treasureland Academy provides high-quality Nursery, Kindergarten, Primary and Junior High education in Kasoa-Brigade, combining Montessori learning, STEM, ICT, character development and sustainability.",
  keywords: seoKeywords,
  openGraph: {
    title: "Treasureland Academy | Montessori, STEM and ICT School in Kasoa",
    description:
      "High-quality Nursery, Kindergarten, Primary and Junior High education in Kasoa-Brigade with Montessori learning, STEM, ICT and character development.",
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
    <html lang="en">
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
