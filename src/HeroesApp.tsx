import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth";

export const HeroesApp = (): JSX.Element => {
  useEffect(() => {
    console.log("App mounted!");
  }, []);

  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
