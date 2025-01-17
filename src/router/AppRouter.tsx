import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { Routes, Route } from "react-router";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
export const AppRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route
          path={`/login/*`}
          element={
            <PublicRouter>
              <Routes>
                <Route path={"/*"} element={<LoginPage />} />
              </Routes>
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
        {/* <Route path={`/*`} element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
