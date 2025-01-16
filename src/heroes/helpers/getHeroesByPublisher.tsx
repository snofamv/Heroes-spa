import { heroes } from "../index";
import { Hero, Publisher } from "../interfaces";

export const getHeroesByPublisher = (publisher: Publisher) => {
  const validPublishers = [Publisher.DCComics, Publisher.MarvelComics];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Error, Publisher: [ ${publisher} ] is not valid!`);
  }

  return heroes.filter((hero: Hero) => hero.publisher === publisher);
};
