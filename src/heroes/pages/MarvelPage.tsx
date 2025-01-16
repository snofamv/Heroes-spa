import { HeroList } from "../components";
import { Publisher } from "../interfaces";

export const MarvelPage = (): JSX.Element => {
  return (
    <main>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroList publisher={Publisher.MarvelComics}></HeroList>
    </main>
  );
};
