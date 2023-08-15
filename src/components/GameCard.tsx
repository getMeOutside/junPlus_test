import {
  Card, CardBody, Heading, HStack, Image,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames.ts';
import getCroppedImageUrl from '../services/image-url.ts';
import Emoji from './Emoji.tsx';

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
