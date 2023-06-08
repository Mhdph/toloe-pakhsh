import ContactUs from '@/components/ContactUs';
import LatestBlog from '@/components/LatestBlog';
import LstItmes from '@/components/ListItmes';
import Navbar from '@/components/Navbar';
import SpecialOffer from '@/components/SpecialOffer';
import SearchBarWF from '@/components/ui/SearchBarWF';

function Store() {
  return (
    <div>
      <SearchBarWF />
      <LstItmes title='آخرین محصولات' />
      <SpecialOffer />
      <LstItmes title='شیرینی جات' />
      <LstItmes title='ترشی جات' />
      <LatestBlog />
      <ContactUs />
    </div>
  );
}

export default Store;
