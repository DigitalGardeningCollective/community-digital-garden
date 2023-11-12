import { 
  AspectRatio,
  Card, 
  CardHeader, 
  CardBody,
  CardFooter,
  Heading, 
  Image, 
  Link
} from "@chakra-ui/react";

export interface Props {
  imageSrc: string
  headerText: string
  descriptionText: string
  footerText: string
  footerLink: string
}

export const LinkCard = ({
  imageSrc, 
  headerText, 
  descriptionText,
  footerLink, 
  footerText
  }: Props) => 
<Card padding='12px'  maxW='sm' size='sm' borderRadius='2rem'>
  <AspectRatio ratio={4/3}>
    <Image borderRadius='2rem' alt={headerText} src={imageSrc} fit='cover'/>
  </AspectRatio>
  <CardHeader>
    <Heading size='md'>{headerText}</Heading>
  </CardHeader>
  <CardBody>{descriptionText}</CardBody>
  <CardFooter>
    <Link fontWeight='bold' href={footerLink}>{footerText}</Link>
  </CardFooter>
</Card>