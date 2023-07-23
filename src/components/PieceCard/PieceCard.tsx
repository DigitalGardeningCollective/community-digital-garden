import { 
  AspectRatio,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Heading, 
  Text, 
  Image, 
  Box, 
} from "@chakra-ui/react";
// import React from 'react';
// import PropTypes from 'prop-types';
//import './PieceCard.css';

interface Piece {
  title: string;
  author: string;
  status: string;
  img: string;
}

interface Props {
  piece: Piece;
}

export const PieceCard = ({piece: { title, author, status, img }}: Props) =>
<Card maxW='sm' boxShadow={'2xl'}>
  <CardHeader padding='0'>
    <AspectRatio ratio={16 / 9}>
      <Image 
        src={img} 
        alt={title} 
        boxSize='sm'
        objectFit='cover'
        layout={'fill'}
      />
    </AspectRatio>
  </CardHeader>
  <CardBody>
    {title ? <Heading>{title}</Heading> : <></>}
    {author ? <Text>By {author}</Text> : <></>}
    {status ? <Text color='grey'>{status}</Text>: <></>}
  </CardBody>
</Card>
  // <CardFooter></CardFooter>
