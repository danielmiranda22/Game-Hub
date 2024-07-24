import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenShots from "../hooks/useGameScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
