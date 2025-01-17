import { getHeroByName } from "../helpers";
import { Hero } from "../interfaces";
import { HeroeCard } from "../components";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router";
import { useMemo, useState } from "react";
import queryString from "query-string";
const initialFormData: object = {
  searchText: "",
};

export const SearchPage = (): JSX.Element => {
  // HOOKS & VARIABLES
  const location = useLocation();
  const navigate = useNavigate();
  const { onInputChange, searchText, onResetForm } = useForm(initialFormData);
  const { q = "" } = queryString.parse(location.search);
  const queryParam: string = q as string;
  // METHODS
  const onSearch = (): void => {
    event?.preventDefault();
    if (searchText.trim().length <= 1) {
      console.warn("Field is too short.");
      return;
    }
    onResetForm();
    navigate(`?q=${searchText}`);
  };

  const heroes: Hero[] = useMemo(() => getHeroByName(queryParam), [queryParam]);
  const showSearch: boolean =
    heroes.length === 0 && queryParam === "" ? true : false;
  const showError: boolean = heroes.length === 0 && queryParam.length > 0;
  const [hoveredHero, setHoveredHero] = useState<string | null>(null);

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input
              type="text"
              name="searchText"
              placeholder="Find a hero..."
              className="form-control"
              onChange={onInputChange}
              value={searchText}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* ESTO SIGUE APARECIENDO EN EL DOM */}
          <div className={`alert alert-primary ${showSearch ? "" : "d-none"}`}>
            <p>Search a hero</p>
          </div>
          <div className={`alert alert-danger ${showError ? "" : "d-none"}`}>
            <p>
              No results about: <b>{queryParam}</b>
            </p>
          </div>
          <div className={`col`}>
            {heroes &&
              heroes.map((hero: Hero) => (
                <div
                  key={hero.id}
                  onMouseEnter={() => setHoveredHero(hero.id)}
                  onMouseLeave={() => setHoveredHero(null)}
                  style={{
                    border: "1px solid lightgray",
                    margin: "10px",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "8px",

                    transform:
                      hoveredHero === hero.id ? "scale(1.05)" : "scale(1)",
                    boxShadow:
                      hoveredHero === hero.id
                        ? "0px 4px 8px rgba(0, 0, 0, 0.2)" // Sombra suave
                        : "none", // Sin sombra
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <HeroeCard key={hero.id} {...hero} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
