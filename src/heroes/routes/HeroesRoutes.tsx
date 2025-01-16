import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../";
import { Navbar } from "../../ui";

export const HeroesRoutes = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to={"/marvel"} />} />

          {/* search hero by id */}
        </Routes>
      </div>
    </>
  );
};
