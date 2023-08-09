import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import styling from './markdown.module.css';

interface Props {
    body: string;
    color?: string | null;
}

export default function PieceContent({ body, color = null }: Props) {
    
    const newLinesConverted = body.replaceAll("\\n", "\n \n"); // Worked (Stick with this)

    // console.log('newLinesConvered -', newLinesConverted);

    // function getColorClass(color: string) {
    //     return color === 'green' ? 'green' : 'red';
    // }

    return (
    <Box mb={4}>
        <ReactMarkdown
            // className={ color ? getColorClass(color) : '' }
            className={styling.markdown}
            components={{ 
                li: ({ node, ...props}) => <li style={{ marginLeft: '20px' }} { ...props } />,
                h1: ({ node, ...props}) => <h1 style={{ fontWeight: 'bold' }} { ...props } />,
                h2: ({ node, ...props}) => <h2 style={{ fontWeight: 'bold' }} { ...props } />,
                h3: ({ node, ...props}) => <h3 style={{ fontWeight: 'bold' }} { ...props } />,
            }}
            >
            { newLinesConverted }
        </ReactMarkdown>
    </Box>
  );
}
