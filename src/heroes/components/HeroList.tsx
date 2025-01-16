import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { Hero, Publisher } from "../interfaces";
import { HeroeCard } from ".";

interface Props {
  publisher: Publisher;
}
export const HeroList = ({ publisher }: Props): JSX.Element => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero: Hero) => (
        <HeroeCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
