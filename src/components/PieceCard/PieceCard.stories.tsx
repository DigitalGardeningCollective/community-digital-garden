import type { Meta, StoryObj } from '@storybook/react';
import { PieceCard } from './PieceCard';


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



// shows the example displayed in the wireframe
export const Default: Story = {
  render: () => 
    <PieceCard data={{
      id: 'slfkjsf',
      mainText: 'Sample Productivity Piece',
      subText: 'This is a description.',
      extraText: 'Evergreen',
      imageURL: 'https://joshwin.dev/img/hero-image.png',
    }} />
}
