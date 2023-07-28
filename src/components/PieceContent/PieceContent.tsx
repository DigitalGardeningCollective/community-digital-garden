import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

interface Props {
    body: string;
    color?: string | null;
}

export default function PieceContent({ body, color = null }: Props) {
    
    const newLinesConverted = body.replace(/["\n"]/g, `&nbsp; \n`);

    function getColorClass(color: string) {
        return color === 'green' ? 'green' : 'red';
    }

    return (
    <Box mb={4}>
        <ReactMarkdown
            className={ color ? getColorClass(color) : '' }
            remarkPlugins={[remarkBreaks]}
            components={{ 
                li: ({ node, ...props}) => <li style={{ marginLeft: '20px' }} { ...props } />,
                h2: ({ node, ...props}) => <h2 style={{ fontWeight: 'bold' }} { ...props } />,
                h3: ({ node, ...props}) => <div><br /><h3 style={{ fontWeight: 'bold' }} { ...props } /></div>,
            }}
            >
            { newLinesConverted }
        </ReactMarkdown>
    </Box>
  );
}
