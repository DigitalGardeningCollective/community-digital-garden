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
export const ExampleCard: Story = {
  render: () => <PieceCard piece={{
    title: 'Title',
    author: 'John Doe',
    status: 'Evergreen',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgzyXVZkLsDs5kDO8odpdiQrRlf2dM-hIW4jnblDeL_3BQnMXi',
  }}/>
}
