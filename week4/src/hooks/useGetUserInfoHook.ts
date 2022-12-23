import useSWR from 'swr';
import { getUserInfo } from '../api/githubAPI';

function useGetUser(username: string) {
  const { data, error } = useSWR(`/users/${username}`, getUserInfo, { suspense: true });

  return {
    userInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGetUser;
