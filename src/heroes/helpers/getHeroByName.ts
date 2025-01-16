import { heroes } from "../data/data";
import { Hero } from "../interfaces";

export const getHeroByName = (name: string = ""): Hero[] => {
  const sanitizedName = name.toLocaleLowerCase().trim();
  if (sanitizedName.length === 0) return [];
  const filteredData = heroes.filter((hero: Hero) =>
    hero.superhero.toLowerCase().includes(sanitizedName)
  );

  return filteredData ? filteredData : [];
};
