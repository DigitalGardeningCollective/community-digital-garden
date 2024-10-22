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
  data: any; // temp setting this to any until Supabase's types support nested data
}

export const PieceCard = ({ data }: Props) => {

  if (!data.title || !data.growth_stage || !data.published_piece_contributor) {
    throw Error("Data properties aren't valid");
  }
  
  const { title, growth_stage, cover_url, published_piece_contributor } = data;

  const contributorName = (published_piece_contributor && published_piece_contributor.length != 0) ? 
    published_piece_contributor[0].contributor.full_name : 
    "Unknown";

  return (
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
        <Text fontSize={16} fontWeight={"bold"}>{title}</Text>
        <Text fontSize={12}>By {contributorName}</Text>
        <Text fontSize={12}  color='grey'>{growth_stage}</Text>
      </CardBody>
    </Card>
  );
}

