import {create} from 'zustand';

interface ProductQuery {
  categoryName?: string;
  categoryEnglishName?: string;
  startPrice?: string;
  endPrice?: string;
  brand?: string;
  exist?: boolean;
  off?: boolean;
  sortName?: string;
  sortDirection?: number;
  skip?: number;
  keyword?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setCategoryName: (categoryName: string | undefined) => void;
  setCategoryEnglishName: (categoryEnglishName: string | undefined) => void;
  setStartPrice: (startPrice: string | undefined) => void;
  setEndPrice: (endPrice: string | undefined) => void;
  setBrand: (brand: string | undefined) => void;
  setExist: (exist: boolean | undefined) => void;
  setOff: (off: boolean | undefined) => void;
  setSortName: (sortName: string | undefined, sortDirection: number) => void;
  setSkip: (skip: number | undefined) => void;
  setDirection: (sortDirection: number | undefined) => void;
  setKeyWord: (keyword: string | undefined) => void;
  setQuery: (keyword: string | undefined, skip: number | undefined) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},
  setCategoryName: (categoryName) => set((state) => ({productQuery: {...state.productQuery, categoryName}})),
  setCategoryEnglishName: (categoryEnglishName) =>
    set((state) => ({productQuery: {...state.productQuery, categoryEnglishName}})),
  setStartPrice: (startPrice) => set((state) => ({productQuery: {...state.productQuery, startPrice}})),
  setEndPrice: (endPrice) => set((state) => ({productQuery: {...state.productQuery, endPrice}})),
  setSortName: (sortName, sortDirection) =>
    set((state) => ({productQuery: {...state.productQuery, sortName, sort: sortDirection}})),
  setBrand: (brand) => set((state) => ({productQuery: {...state.productQuery, brand}})),
  setExist: (exist) => set((state) => ({productQuery: {...state.productQuery, exist}})),
  setOff: (off) => set((state) => ({productQuery: {...state.productQuery, off}})),
  setSkip: (skip) => set((state) => ({productQuery: {...state.productQuery, skip}})),
  setDirection: (sortDirection) => set((state) => ({productQuery: {...state.productQuery, sortDirection}})),
  setKeyWord: (keyword) => set((state) => ({productQuery: {...state.productQuery, keyword}})),
  setQuery: (keyword, skip) => set((state) => ({productQuery: {...state.productQuery, keyword, skip}})),
}));

export default useProductQueryStore;
