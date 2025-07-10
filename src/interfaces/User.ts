export interface User {
  id: string;
  avatar: string;
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
