import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../";
import { Navbar } from "../../ui";

export const HeroesRoutes = (): JSX.Element => {
  // ESTO NO SE DEBE HACER XD
  return (
    <>
      <Navbar />
      <div className="container" style={{}}>
        <Routes>
          {/* <Route path={`/`} element={<MarvelPage />} /> */}
          <Route path="/" element={<Navigate to={"/marvel"} />} />
          <Route path={`/marvel`} element={<MarvelPage />} />
          <Route path={`/dc`} element={<DcPage />} />
          <Route path={`/search`} element={<SearchPage />} />
          <Route path={`/hero/:heroId`} element={<HeroPage />} />

          {/* search hero by id */}
        </Routes>
      </div>
    </>
  );
};
