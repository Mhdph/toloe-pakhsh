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
      <OfferHero />
      <CategoryList />
      <LstItmes />
      <div className="flex justify-center text-white">
        <button className="btn_primary mt-48 mb-16 text-xs font-extrabold">
          مشاهده محصولات
        </button>
      </div>
      <SpecialOffer />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
