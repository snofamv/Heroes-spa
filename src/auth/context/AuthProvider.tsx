import { useReducer } from "react";
import { AuthContext, authReducer, AuthTypes, User } from ".";
// data inicial para el useReducer
const init = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return {
    logged: user ? true : false,
    user: user ? user : ({} as User),
  };
};
export const AuthProvider = ({ children }: any) => {
  const [state, authDispatch] = useReducer(authReducer, {}, init);

  const login = async (username: string = ""): Promise<void> => {
    const userExample: User = { id: "ABC123", name: "Fabian", role: "user", username };
    const action = {
      type: AuthTypes.login,
      payload: userExample,
    };
    localStorage.setItem("user", JSON.stringify(userExample));
    authDispatch(action);
  };
  const logout = async () => {
    localStorage.removeItem("user");
    const action = {
      type: AuthTypes.logout,
      payload: {} as User,
    };
    authDispatch(action);
  };
  return (
    <AuthContext.Provider value={{ state, login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
