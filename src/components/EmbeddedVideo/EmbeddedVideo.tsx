import { useMediaQuery } from '@chakra-ui/react';

interface Props {
  videoId: String;
}

export const EmbeddedVideo = ({ videoId }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <iframe width='100%' height={isMobile ? '300px' : '500px'}
      src={`https://www.youtube.com/embed/${videoId}`}>
    </iframe>
  )
}