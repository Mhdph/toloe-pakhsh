import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import LstItmes from "@/components/LstItmes";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <CategoryList />
      <LstItmes />
    </main>
  );
}
