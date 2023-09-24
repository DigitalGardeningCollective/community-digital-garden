import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Image,
    Stack
} from "@chakra-ui/react";

export const WeeklyDigest = () => 
<Card marginBottom='50px' direction={{ base: 'column', sm: 'row' }}>
  <Image width='350px'
    padding='16px' 
    alt='Co-x3 Logo + greenery' 
    src='co-x3_tree_with_overlap.png' 
    fit='scale-down'/>
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