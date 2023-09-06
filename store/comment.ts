import {create} from 'zustand';

interface commentQuery {
  take?: number;
  skip?: number;
}

interface CommentQueryStore {
  commentQuery: commentQuery;
  setTake: (take: number | undefined) => void;
  setSkip: (skip: number | undefined) => void;
}

const useCommentStore = create<CommentQueryStore>((set) => ({
  commentQuery: {},
  setTake: (take) => set((state) => ({commentQuery: {...state.commentQuery, take}})),
  setSkip: (skip) => set((state) => ({commentQuery: {...state.commentQuery, skip}})),
}));

export default useCommentStore;
