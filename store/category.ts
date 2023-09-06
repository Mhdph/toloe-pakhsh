import {create} from 'zustand';

interface categoryQuery {
  take?: number;
  skip?: number;
}

interface UserQueryStore {
  categoryQuery: categoryQuery;
  setTake: (take: number | undefined) => void;
  setSkip: (skip: number | undefined) => void;
}

const useCategoryStore = create<UserQueryStore>((set) => ({
  categoryQuery: {},
  setTake: (take) => set((state) => ({categoryQuery: {...state.categoryQuery, take}})),
  setSkip: (skip) => set((state) => ({categoryQuery: {...state.categoryQuery, skip}})),
}));

export default useCategoryStore;
