import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";

////Calling the server
//const useGenres = () => useData<Genre>("/genres");

//// Get static data
//const useGenres = () => ({ data: genres, isLoading: false, error: null });

//use react-query to fetch the data

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"), //24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
