import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_COMMENT} from '../constants';
import {Comment} from '@/entities/Comment';
import useCommentStore from '@/store/comment';

interface commentQuery {
  take?: number;
  skip?: number;
}

const apiClient = new APIClient<Comment>('/comment');

const UseGetComments = () => {
  const commentQuery = useCommentStore((s) => s.commentQuery);
  const params: commentQuery = {};

  if (commentQuery.skip) {
    params.skip = commentQuery.skip;
  }
  return useQuery({
    queryKey: [CACHE_KEY_COMMENT, commentQuery.skip],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};

export default UseGetComments;
