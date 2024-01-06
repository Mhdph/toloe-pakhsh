import ContactUs from '@/components/ContactUs';
import ListItems from '@/components/ListItems';
import ListStore from '@/components/ListStore';
import SpecialOffer from '@/components/SpecialOffer';
import SearchBarWF from '@/components/ui/SearchBarWF';
import {getAllCategory} from '@/service/category';
import {getAllOffProduct, getAllProduct} from '@/service/product';

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props) {
  const {page} = searchParams;
  const siteURL = 'https://toloupakhsh.ir';

  return {
    alternates: {
      canonical: `${siteURL}/shop`,
    },
  };
}

export default async function Store() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();
  const categoryData = await getAllCategory();

  return (
    <div>
      <h1 className='hidden'>فروشگاه طلوع پخش</h1>
      <SearchBarWF />
      <ListItems data={data.data} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      <>
        {categoryData.data.map((item: any) => (
          <ListStore key={item.id} categoryName={item.name} urlName={`/product-category/${item.name}?page=1`} />
        ))}
      </>

      <ContactUs />
    </div>
  );
}
