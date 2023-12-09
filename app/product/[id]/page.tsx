import ContactUs from '@/components/ContactUs';
import ListItems from '@/components/ListItems';
import ProductDetails from '@/components/store/ProductDetails';
import ProductTabs from '@/components/store/ProductTabs';
import {baseUrl} from '@/lib/config';
import {getSameProduct} from '@/service/product';
import {Beaker} from 'lucide-react';
import {Metadata, ResolvingMetadata} from 'next';

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`${baseUrl}/product/getbyid/${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // console.log(product.name);
  return {
    other: {
      product_name: product.name,
      product_id: product.id,
      'og:image': baseUrl + product.picture,
      product_price: product.price,
      availability: product.exist ? 'instock' : 'outofstock',
    },
  };
}

export default async function Page({params, searchParams}: Props) {
  const id = params.id;
  const product = await fetch(`${baseUrl}/product/getbyid/${id}`).then((res) => res.json());
  const data = await getSameProduct(product.name);

  return (
    <div>
      <div>
        <ProductDetails />
        <ProductTabs />
      </div>
      <ListItems data={data.data} link='/' title='محصولات مشابه' />
      <div className='hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}
