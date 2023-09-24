import React, { useState } from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Flex, Heading, Image, Text, IconButton } from '@chakra-ui/react';
import profileImage from './profile.png'; // Import the default image file
import twitterImage from './twitter.png'; // Import the Twitter image file
import redditImage from './reddit.png'; // Import the Reddit image file
import internetImage from './world-wide-web.png'; // Import the Internet image file
import { Invalid } from './Comment.stories';

interface CommentProps {
  fullName: string;
  avatarURL: string;
  origin: string;
  content: string;
  dateTime: string;
}

const Comment: React.FC<CommentProps> = ({
  fullName,
  avatarURL,
  origin,
  content,
  dateTime,
}) => {
  // Select the image based on the origin
  let originImage;
  if (origin === 'Twitter') {
    originImage = twitterImage;
  } else if (origin === 'Reddit') {
    originImage = redditImage;
  } else {
    originImage = internetImage;
  }


  // Event handler to handle image loading error
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Update avatarURL to "profile.png" on error
    event.currentTarget.src = profileImage.src;
  };

  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex gap='4' alignItems="center">
            <Image
              src={avatarURL}
              alt={`Profile`}
              borderRadius='full'
              boxSize='40px'
              onError={handleImageError} 
            />

            <Box>
              <Flex gap='1' alignItems="center"> {/* Flex container for origin and dateTime */}
                <Heading size='sm'>{fullName}</Heading>
                <Image src={originImage.src} alt={`Origin: ${origin}`} boxSize='15px' ml='1' />
              </Flex>
              <Text fontSize='sm' fontWeight='medium' color='gray.500'>{dateTime}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      {/* ... */}
    </Card>
  );
};

export default Comment;


{/* <a href="https://www.flaticon.com/free-icons/reddit" title="reddit icons">Reddit icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Pixel perfect - Flaticon</a> 
<a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a> */}