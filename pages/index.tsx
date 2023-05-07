import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import LstItmes from "@/components/LstItmes";
import SpecialOffer from "@/components/SpecialOffer";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import OfferHero from "@/components/OfferHero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <CategoryList />
      <OfferHero />
      <LstItmes />
      <SpecialOffer />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
