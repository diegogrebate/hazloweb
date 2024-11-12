import { CTA } from "@/components/landing/CTA";
import { FAQs } from "@/components/landing/FAQs";
import Features from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import { ProductShowcase } from "@/components/landing/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
