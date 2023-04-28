import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import LstItmes from "@/components/LstItmes";
import SpecialOffer from "@/components/SpecialOffer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <CategoryList />
      <LstItmes />
      <div className="flex justify-center text-white">
        <button className="btn_primary mt-48 mb-16">مشاهده محصولات</button>
      </div>
      <SpecialOffer />
      <AboutUs />
    </main>
  );
}
