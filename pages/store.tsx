import ContactUs from "@/components/ContactUs";
import LatestBlog from "@/components/LatestBlog";
import LstItmes from "@/components/LstItmes";
import Navbar from "@/components/Navbar";
import SpecialOffer from "@/components/SpecialOffer";
import SearchBarWF from "@/components/ui/SearchBarWF";

function Store() {
  return (
    <div>
      <Navbar />
      <SearchBarWF />
      <LstItmes />
      <SpecialOffer />
      <LstItmes />
      <LstItmes />
      <LatestBlog />
      <ContactUs />
    </div>
  );
}

export default Store;
