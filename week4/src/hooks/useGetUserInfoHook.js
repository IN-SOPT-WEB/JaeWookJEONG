import useSWR from 'swr';
import { getUserInfo } from '../api/githubAPI';

function useGetUser(username) {
  const { data, error } = useSWR(`/users/${username}`, getUserInfo, { suspense: true });

  return {
    userInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGetUser;
