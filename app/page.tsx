import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import ListItems from "@/components/ListItems";
import SpecialOffer from "@/components/SpecialOffer";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import OfferHero from "@/components/OfferHero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CategoryList />
      <OfferHero />
      <ListItems link="" title="آخرین محصولات" />
      <SpecialOffer />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
