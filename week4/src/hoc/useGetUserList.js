import useSWR from 'swr';
import { getUserList } from '../api/githubAPI';

function useGetUserList() {
  const { data } = useSWR(`/api/users`, getUserList);

  return {
    userList: data,
  };
}

export default useGetUserList;
