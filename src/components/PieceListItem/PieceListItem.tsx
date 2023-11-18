import { 
  Text, 
  Image,
  VStack,
  HStack,
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
}

export const PieceListItem = ({data: { imageURL, mainText, subText, extraText }}: Props) =>
<HStack width={"100%"} alignItems={'start'} justifyContent={'start'}>
    <VStack alignItems={'start'} flex={2}>
        <Text fontSize={16} fontWeight={"bold"}>{mainText}</Text>
        <Text fontSize={12}>By {subText}</Text>
        <Text fontSize={12}  color='grey'>{extraText}</Text> 
    </VStack>
    <Image 
        height={20}
        src={imageURL ?? undefined} 
        alt={mainText ?? undefined} 
    />
</HStack>
