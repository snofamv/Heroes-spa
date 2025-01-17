import { AuthState, AuthTypes } from ".";

export const authReducer = (
  state: AuthState = { logged: false, user: {} },
  action: any
): AuthState => {
  switch (action.type) {
    case AuthTypes.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case AuthTypes.logout:
      return {
        ...state,
        logged: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
