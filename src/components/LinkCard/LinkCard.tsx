import { 
  AspectRatio,
  Card, 
  CardHeader, 
  CardFooter,
  Heading, 
  Image, 
  Link
} from "@chakra-ui/react";

export interface Props {
  imageSrc: string;
  headerText: string;
  footerText: string;
  footerLink: string;
}

export const LinkCard = ({
  imageSrc, 
  headerText, 
  footerLink, 
  footerText
  }: Props) =>
<Card maxW='sm'>
  <AspectRatio ratio={4/3}>
    <Image alt={headerText} src={imageSrc} fit='cover'/>
  </AspectRatio>
  <CardHeader>
    <Heading size='md'>{headerText}</Heading>
  </CardHeader>
  <CardFooter>
    <Link href={footerLink}>{footerText}</Link>
  </CardFooter>
</Card>