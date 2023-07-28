import { 
  AspectRatio,
  Card, 
  CardHeader, 
  CardBody, 
  Heading, 
  Text, 
  Image, 
} from "@chakra-ui/react";

interface Piece {
  title: string;
  author: string;
  status: string;
  img: string;
}

interface Props {
  piece: Piece;
}

export const PieceCard = ({piece: { title, author, status, img }}: Props) =>
<Card maxW='sm' boxShadow={'2xl'}>
  <CardHeader padding='0'>
    <AspectRatio ratio={16 / 9}>
      <Image 
        src={img} 
        alt={title} 
        boxSize='sm'
        objectFit='cover'
      />
    </AspectRatio>
  </CardHeader>
  <CardBody>
    <Heading>{title}</Heading>
    <Text>By {author}</Text>
    <Text color='grey'>{status}</Text>
  </CardBody>
</Card>
