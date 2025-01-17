import { Link } from "react-router";
import { Hero } from "../interfaces";
const CharactersByHero = ({
  alter_ego,
  characters,
}: {
  alter_ego: string;
  characters: string;
}): JSX.Element => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroeCard = (hero: Hero) => {
  const { id, superhero, alter_ego, first_appearance } = hero;
  const heroImageUrl = `./assets/heroes/${id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero key={hero.id} {...hero} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
