import ContactUs from "@/components/ContactUs";
import LatestBlog from "@/components/LatestBlog";
import ListItems from "@/components/ListItems";
import SpecialOffer from "@/components/SpecialOffer";
import SearchBarWF from "@/components/ui/SearchBarWF";

function Store() {
  return (
    <div>
      <SearchBarWF />
      <ListItems link="account" title="آخرین محصولات" />
      <SpecialOffer />
      <ListItems link="account" title="شیرینی جات" />
      <ListItems link="account" title="ترشی جات" />
      <LatestBlog />
      <ContactUs />
    </div>
  );
}

export default Store;
