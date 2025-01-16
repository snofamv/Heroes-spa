import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { Routes, Route } from "react-router";

export const AppRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
