import { Contributor, Published_Piece_View } from "@/types/manual";
import { 
  AspectRatio,
  Card, 
  CardHeader, 
  CardBody, 
  Heading, 
  Text, 
  Image, 
} from "@chakra-ui/react";

interface Props {
  piece: Published_Piece_View;
  contributor: Contributor;
}

export const PieceCard = ({piece: { title, growth_stage, cover_url }, contributor: { full_name }}: Props) =>
<Card maxW='sm' boxShadow={'2xl'}>
  <CardHeader padding='0'>
    <AspectRatio ratio={16 / 9}>
      <Image 
        src={cover_url ?? undefined} 
        alt={title ?? undefined} 
        boxSize='sm'
        objectFit='cover'
        borderBottom={'1px'}
        borderColor={'lightgray'}
      />
    </AspectRatio>
  </CardHeader>
  <CardBody>
    <Heading>{title}</Heading>
    <Text>By {full_name}</Text>
    <Text color='grey'>{growth_stage}</Text>
  </CardBody>
</Card>