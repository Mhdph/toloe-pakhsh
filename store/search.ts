import {create} from 'zustand';

interface ProductQuery {
  categoryName?: string;
  startPrice?: string;
  endPrice?: string;
  brand?: string;
  exist?: boolean;
  off?: boolean;
  sortName?: string;
  sortDirection?: number;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setCategoryName: (categoryName: string | undefined) => void;
  setStartPrice: (startPrice: string | undefined) => void;
  setEndPrice: (endPrice: string | undefined) => void;
  setBrand: (brand: string | undefined) => void;
  setExist: (exist: boolean | undefined) => void;
  setOff: (off: boolean | undefined) => void;
  setSortName: (sortName: string | undefined, sortDirection: number) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},
  setCategoryName: (categoryName) => set((state) => ({productQuery: {...state.productQuery, categoryName}})),
  setStartPrice: (startPrice) => set((state) => ({productQuery: {...state.productQuery, startPrice}})),
  setEndPrice: (endPrice) => set((state) => ({productQuery: {...state.productQuery, endPrice}})),
  setSortName: (sortName, sortDirection) =>
    set((state) => ({productQuery: {...state.productQuery, sortName, sort: sortDirection}})),
  setBrand: (brand) => set((state) => ({productQuery: {...state.productQuery, brand}})),
  setExist: (exist) => set((state) => ({productQuery: {...state.productQuery, exist}})),
  setOff: (off) => set((state) => ({productQuery: {...state.productQuery, off}})),
}));

export default useProductQueryStore;
