import {create} from 'zustand';

interface UserQuery {
  keyword?: string;
  skip?: number;
}

interface UserQueryStore {
  userQuery: UserQuery;
  setKeyWord: (keyword: string | undefined) => void;
  setSkip: (skip: number | undefined) => void;
}

const useUserSerachStore = create<UserQueryStore>((set) => ({
  userQuery: {},
  setKeyWord: (keyword) => set((state) => ({userQuery: {...state.userQuery, keyword}})),
  setSkip: (skip) => set((state) => ({userQuery: {...state.userQuery, skip}})),
}));

export default useUserSerachStore;
