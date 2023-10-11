import {
    Card,
    CardHeader,
    Center,
    CardBody,
    Heading,
    Image,
    Stack
} from "@chakra-ui/react";

export const WeeklyDigest = () => 
<Card marginBottom='50px' direction={{ base: 'column', sm: 'row' }}>
<Center paddingLeft='1cm'>
  {/* <Heading>Co-x3 Logo + greenery</Heading> */}
  <Image boxSize='200px' 
    alt='Co-x3 Logo + greenery' 
    src='/images/dgc_512.png' 
    fit='scale-down'/>
</Center>
<Stack>
  <CardHeader>
    <Heading>
      Weekly Digest is Coming Soon!
    </Heading>
  </CardHeader>
  <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </CardBody>
</Stack>
</Card>