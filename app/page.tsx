import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import ListItems from "@/components/ListItems";
import SpecialOffer from "@/components/SpecialOffer";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import OfferHero from "@/components/OfferHero";
import { baseUrl } from "@/lib/config";

async function getData() {
  const res = await fetch(`${baseUrl}/product`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CategoryList />
      <OfferHero />
      <ListItems data={data.data} link="" title="آخرین محصولات" />
      {/* <SpecialOffer /> */}
      <AboutUs />
      <ContactUs />
    </main>
  );
}
