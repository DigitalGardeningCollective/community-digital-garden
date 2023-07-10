import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from 'react';
import PropTypes from 'prop-types';
import './PieceCard.css';

export const PieceCard = ({ title, author, tag, description, img}) => (
  <Card>
    <CardHeader>
      <Heading size='md'>{ title }</Heading>
    </CardHeader>
    <CardBody>
      <Text>testing {title} testing</Text>
    </CardBody>

  </Card>
);

PieceCard.propTypes = {

};

PieceCard.defaultProps = {
 title: null,
};
