import { Submission } from "@/types/manual";
import { isChangeDetails } from "@/types/utilities";
import { 
  Tr,
  Td, 
} from "@chakra-ui/react";
import { format } from "date-fns";

interface Props {
  submission: Submission;
  func: (id: number | string) => void;
}

export const SubmissionTableItem = ({submission: { id, change_details, created_at }, func}: Props) => {

  if (!id || !created_at || !change_details || !isChangeDetails(change_details)) {
    throw Error("Data properties aren't valid");
}

  const pieceTitle = change_details.metadata.title;

  const constributorName = change_details.contributor.full_name;

  return (
    <Tr cursor={'pointer'} onClick={ () => func(id) }>
        <Td>{ pieceTitle }</Td>
        <Td>{ constributorName }</Td>
        <Td>{ format(new Date(created_at), "yyyy-MM-dd h:mm") }</Td>
    </Tr>
  )
}