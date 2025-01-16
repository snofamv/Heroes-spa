import { heroes } from "../data/data";
import { Hero } from "../interfaces";

export const getHeroeByid = (idParam: string): Hero | undefined =>
  heroes.find((hero: Hero) => hero.id == idParam);
