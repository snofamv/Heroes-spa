import { HeroList } from "../components";
import { Publisher } from "../interfaces";
// interfz de prop comun utilizada en paginas
export interface PropsHeroes {
  publisher: Publisher;
}
export const DcPage = () => {
  return (
    <main>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher={Publisher.DCComics}></HeroList>
    </main>
  );
};
