import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = (): JSX.Element => {
  useEffect(() => {
    console.log("App mounted!");
  }, []);

  return (
    <>
      <AppRouter></AppRouter>
    </>
  );
};
