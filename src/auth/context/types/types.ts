export enum AuthTypes {
  login = "[AUTH] Login",
  logout = "[AUTH] Logout",
}

export interface User {
  id?: string;
  name?: string;
  username?: string;
  role?: string;
}
export interface AuthState {
  logged: boolean;
  user: User;
}