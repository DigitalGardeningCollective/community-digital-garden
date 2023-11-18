import { 
  
  Tr,
  Td, 
} from "@chakra-ui/react";
import { format } from "date-fns";

export interface UniformDataFormat {
  id: string | number;
  imageURL: string;
  mainText: string;
  subText: string;
  extraText: string;
}

interface Props {
  data: UniformDataFormat;
  func: (id: number | string) => void;
}

export const SubmissionTableItem = ({data: { id, mainText, subText, extraText }, func}: Props) =>
<Tr cursor={'pointer'} onClick={ () => func(id) }>
    <Td>{ mainText }</Td>
    <Td>{ subText }</Td>
    <Td>{ format(new Date(extraText), "yyyy-MM-dd h:mm") }</Td>
</Tr>