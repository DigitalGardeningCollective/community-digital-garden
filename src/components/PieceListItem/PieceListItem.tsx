import { 
  Text, 
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

interface Props {
  data: any; // temporarily setting this to any until Supabase's types support nested data
}

export const PieceListItem = ({ data }: Props) => {

  if (!data.title || !data.growth_stage) {
    throw Error("Data properties aren't valid");
  }
  
  const { title, growth_stage, cover_url } = data;

  const contributorName = (data.version && data.version.length != 0) ? 
    data.version[0].version_contributor[0].contributor.full_name : 
    "Unknown";

  return (
    <HStack width={"100%"} alignItems={'start'} justifyContent={'start'}>
        <VStack alignItems={'start'} flex={2}>
            <Text fontSize={16} fontWeight={"bold"}>{title}</Text>
            <Text fontSize={12}>By {contributorName}</Text>
            <Text fontSize={12}  color='grey'>{growth_stage}</Text> 
        </VStack>
        <Image 
            height={20}
            src={cover_url ?? undefined} 
            alt={title ?? undefined} 
        />
    </HStack>
  )
}
