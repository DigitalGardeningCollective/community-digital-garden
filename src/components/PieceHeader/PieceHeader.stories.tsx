import type { Meta, StoryObj } from '@storybook/react';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';
import { useDisclosure } from '@chakra-ui/react';
import { PieceHeader } from './PieceHeader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PieceHeader> = {
  title: 'App/PieceHeader',
  component: PieceHeader,
};

export default meta;

type Story = StoryObj<typeof PieceHeader>;

export const Basic: Story = {
    render: () => <PieceHeader
        header={{ 
            title: "Introducing Co-x3's Digital Gardening Initiative", 
            description: null, 
            cover_url: null,
            growth_stage: "Seedling",
            created_at: "2023-07-23 17:50:44.769474+00",
            updated_at: null,
            contributor: { 
              full_name: "Joshwin Greene", 
              avatar_url: "https://joshwin.dev/img/joshwin-linkedin-photo.JPG",
              id: 'sdlkfjsdlf',
              bio: "Hello World!",
              created_at: "2023-07-23 17:50:44.769474+00",
              updated_at: null,
              username: "joshwin_greene"
            },
            tags: ['Digital Garden', 'Co-x3']
        }}
    />,
  };

  export const AftedEdit: Story = {
    render: () => <PieceHeader
        header={{ 
            title: "Introducing Co-x3's Digital Gardening Initiative", 
            description: "", 
            cover_url: null,
            growth_stage: "Seedling",
            created_at: "2023-07-23 17:50:44.769474+00",
            updated_at: "2023-07-25 17:50:44.769474+00",
            contributor: { 
              full_name: "Joshwin Greene", 
              avatar_url: "https://joshwin.dev/img/joshwin-linkedin-photo.JPG",
              id: 'sdlkfjsdlf',
              bio: "Hello World!",
              created_at: "2023-07-23 17:50:44.769474+00",
              updated_at: null,
              username: "joshwin_greene"
            },
            tags: ['Digital Garden', 'Co-x3']
        }}
    />,
  };

  export const WithDescription: Story = {
    render: () => <PieceHeader
        header={{ 
            title: "Introducing Co-x3's Digital Gardening Initiative", 
            description: "This is a sample description.", 
            cover_url: null,
            growth_stage: "Seedling",
            created_at: "2023-07-23 17:50:44.769474+00",
            updated_at: "2023-07-25 17:50:44.769474+00",
            contributor: { 
              full_name: "Joshwin Greene", 
              avatar_url: "https://joshwin.dev/img/joshwin-linkedin-photo.JPG",
              id: 'sdlkfjsdlf',
              bio: "Hello World!",
              created_at: "2023-07-23 17:50:44.769474+00",
              updated_at: null,
              username: "joshwin_greene"
            },
            tags: ['Digital Garden', 'Co-x3']
        }}
    />,
  };