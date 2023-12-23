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
  sortName?: string;
  sort?: number;
  skip?: number;
  productName?: string;
}

const useProducts = () => {
  const gameQuery = useProductQueryStore((s) => s.productQuery);
  const debouncedCategory = useDebounce(gameQuery.categoryName, 300);
  const debouncedStartPrice = useDebounce(gameQuery.startPrice, 300);
  const debouncedEndPrice = useDebounce(gameQuery.endPrice, 300);
  const debouncedBrand = useDebounce(gameQuery.brand, 300);
  const debouncedKeyWord = useDebounce(gameQuery.keyword, 300);

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
  if (debouncedKeyWord) {
    params.productName = debouncedKeyWord;
  }

  if (gameQuery.sortName) {
    params.sortName = gameQuery.sortName;
    params.sort = gameQuery.sortDirection;
  }
  if (gameQuery.exist) {
    params.exist = gameQuery.exist;
  }

  if (gameQuery.off) {
    params.off = gameQuery.off;
  }
  if (gameQuery.skip) {
    params.skip = gameQuery.skip;
  }

  return useQuery({
    queryKey: [
      CACHE_KEY_PRODUCT,
      debouncedCategory,
      debouncedStartPrice,
      debouncedBrand,
      debouncedEndPrice,
      debouncedKeyWord,
      gameQuery.off,
      gameQuery.exist,
      gameQuery.skip,
      gameQuery.sortName,
      gameQuery.sortDirection,
    ],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};
export default useProducts;
