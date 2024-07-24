import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data["max"]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
