import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useGameScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenShots;
