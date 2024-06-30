import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//Calling the server
//const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
