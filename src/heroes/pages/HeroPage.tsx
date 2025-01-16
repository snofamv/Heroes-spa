import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroeByid } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroeByid(heroId!), [heroId]);
  if (!hero) return <Navigate to={"/marvel"} />;
  const { superhero, id, alter_ego, publisher, first_appearance, characters } =
    hero;
  const heroImageUrl = `../assets/heroes/${id}.jpg`;
  const handleNavigateBack = () => {
    // Opcion 1
    // const currentPage = heroId?.split("-")[0];
    // return currentPage === "marvel"
    //   ? navigate("/marvel", { replace: true })
    //   : navigate("/dc", { replace: true });

    // Opcion2
    navigate(-1);
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img
            src={heroImageUrl}
            alt={`heroDescription-${superhero}`}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8 animate__animated animate__fadeIn animate__delay-1s">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First appereance: </b>
              {first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>
          <button className="btn btn-primary" onClick={handleNavigateBack}>
            Go back ⬅️
          </button>
        </div>
      </div>
    </>
  );
};
