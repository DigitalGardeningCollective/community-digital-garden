import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

interface Props {
    message: string;
}

export const InfoDisplay: FC<Props> = ({
    message,
}) => {
  return (
    <Box textAlign="center" py={10} px={6} borderWidth={1} borderColor="lightgrey">
        <InfoIcon boxSize={'50px'} color={'blue.500'} />
        <Text color={'gray.500'} fontSize={"2xl"}>
            { message }
        </Text>
    </Box>
  );
}