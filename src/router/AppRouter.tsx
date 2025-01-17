import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { Routes, Route } from "react-router";
export const URL_BASE = "Heroes-spa";
export const AppRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path={`/${URL_BASE}/login`} element={<LoginPage />} />
        <Route path={`/${URL_BASE}/*`} element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
