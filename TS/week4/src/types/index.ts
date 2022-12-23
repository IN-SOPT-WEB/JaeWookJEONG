export interface UserData {
  id: number;
  user: string;
  github: string;
}

export interface UserGihubDate {
  login: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
}
