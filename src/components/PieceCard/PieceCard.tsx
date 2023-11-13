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

export interface UniformDataFormat {
  id: string | number;
  imageURL: string;
  mainText: string;
  subText: string;
  extraText: string;
}

interface Props {
  data: UniformDataFormat;
  // contributor: Contributor;
}

export const PieceCard = ({data: { imageURL, mainText, subText, extraText }}: Props) =>
<Card maxW='sm' boxShadow={'2xl'}>
  <CardHeader padding='0'>
    <AspectRatio ratio={16 / 9}>
      <Image 
        src={imageURL ?? undefined} 
        alt={mainText ?? undefined} 
        boxSize='sm'
        objectFit='cover'
        borderBottom={'1px'}
        borderColor={'lightgray'}
      />
    </AspectRatio>
  </CardHeader>
  <CardBody>
    <Text fontSize={16} fontWeight={"bold"}>{mainText}</Text>
    <Text fontSize={12}>By {subText}</Text>
    <Text fontSize={12}  color='grey'>{extraText}</Text>
  </CardBody>
</Card>
