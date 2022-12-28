export interface UserGithubData {
  avatar_url: string;
  login: string;
  name: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface UserListData {
  id: number;
  user: string;
  github: string;
}
