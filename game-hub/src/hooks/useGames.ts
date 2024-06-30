import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //is not platform array!! Its an array of objects where wich object as a property called platform of type Platform
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatfrom: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatfrom?.id,
      },
    },
    [selectedGenre?.id, selectedPlatfrom?.id] // array of dependencies
  );

export default useGames;
