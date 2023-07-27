import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import {Product} from '@/entities/product';
import useProductQueryStore from '@/store/search';
import useDebounce from '@/hooks/useDebounce';

const apiClient = new APIClient<Product>('/product');

interface ProductQuery {
  categoryName?: string;
  startPrice?: string;
  endPrice?: string;
  brand?: string;
  exist?: boolean;
  off?: boolean;
}

const useProducts = () => {
  const gameQuery = useProductQueryStore((s) => s.productQuery);
  const debouncedCategory = useDebounce(gameQuery.categoryName, 3000);
  const debouncedStartPrice = useDebounce(gameQuery.startPrice, 3000);
  const debouncedEndPrice = useDebounce(gameQuery.endPrice, 3000);
  const debouncedBrand = useDebounce(gameQuery.brand, 3000);
  const params: ProductQuery = {};

  if (debouncedCategory) {
    params.categoryName = debouncedCategory;
  }
  if (debouncedStartPrice) {
    params.startPrice = gameQuery.startPrice;
  }
  if (debouncedEndPrice) {
    params.endPrice = debouncedEndPrice;
  }
  if (debouncedBrand) {
    params.brand = debouncedBrand;
  }

  if (gameQuery.exist) {
    params.exist = gameQuery.exist;
  }

  if (gameQuery.off) {
    params.off = gameQuery.off;
  }

  return useQuery({
    queryKey: [
      CACHE_KEY_PRODUCT,
      debouncedCategory,
      debouncedStartPrice,
      debouncedBrand,
      debouncedEndPrice,
      gameQuery.off,
      gameQuery.exist,
    ],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};
export default useProducts;
