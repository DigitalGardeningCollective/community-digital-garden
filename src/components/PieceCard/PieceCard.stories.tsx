import type { Meta, StoryObj } from '@storybook/react';
import { PieceCard } from './PieceCard';
import { Published_Piece_View } from '@/types/manual';


const meta: Meta<typeof PieceCard> = {
  title: 'App/PieceCard',
  component: PieceCard,
};

export default meta;
type Story = StoryObj<typeof PieceCard>;


/*
*👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const samplePiece: Published_Piece_View = {
  id: 'slfkjsf',
  title: 'Sample Productivity Piece',
  description: 'This is a description.',
  growth_stage: 'Evergreen',
  type: 'Essay',
  updated_at: null,
  created_at: '2023-07-23 18:07:48.679761+00',
  url_key: 'productivity',
  cover_url: 'https://joshwin.dev/img/hero-image.png',
  content: ''
}

const sampleContributor = { 
  full_name: "Joshwin Greene", 
  avatar_url: "https://joshwin.dev/img/joshwin-linkedin-photo.JPG",
  id: 'sdlkfjsdlf',
  bio: "Hello World!",
  created_at: "2023-07-23 17:50:44.769474+00",
  updated_at: null,
  username: "joshwin_greene"
}

// shows the example displayed in the wireframe
export const ExampleCard: Story = {
  render: () => 
    <PieceCard piece={samplePiece} contributor={sampleContributor} />
}
