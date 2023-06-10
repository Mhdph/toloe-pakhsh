import ContactUs from "@/components/ContactUs";
import LatestBlog from "@/components/LatestBlog";
import ListItems from "@/components/ListItems";
import SpecialOffer from "@/components/SpecialOffer";
import SearchBarWF from "@/components/ui/SearchBarWF";

function Store() {
  return (
    <div>
      <SearchBarWF />
      <ListItems title="آخرین محصولات" />
      <SpecialOffer />
      <ListItems title="شیرینی جات" />
      <ListItems title="ترشی جات" />
      <LatestBlog />
      <ContactUs />
    </div>
  );
}

export default Store;
