import {create} from 'zustand';

interface UserQuery {
  keyword?: string;
}

interface UserQueryStore {
  userQuery: UserQuery;
  setKeyWord: (keyword: string | undefined) => void;
}

const useUserSerachStore = create<UserQueryStore>((set) => ({
  userQuery: {},
  setKeyWord: (keyword) => set((state) => ({userQuery: {...state.userQuery, keyword}})),
}));

export default useUserSerachStore;
