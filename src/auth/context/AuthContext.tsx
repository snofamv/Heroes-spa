import { createContext } from "react";
import { AuthState } from "./types/types";
interface ContextProperties {
  // All values to share on the provider here
  state: AuthState;
  login: (username: string) => Promise<void>;
  logout: () => Promise<void>;
}
export const AuthContext = createContext<ContextProperties>(
  {} as ContextProperties
);
