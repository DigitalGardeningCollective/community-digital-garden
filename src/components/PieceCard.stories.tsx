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
export const EmptyCard: Story = {
  render: () => <PieceCard piece={{}}/>,
};

export const Primary: Story = {
  render: (piece) => <PieceCard piece={piece}/>,
};

// TODO change later
let defaultImage = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
export const NoImage: Story = {
  render: (title, author, status) => <PieceCard piece={{title, author, status, img: defaultImage}}/>
}

export const ExampleCard: Story = {
  render: () => <PieceCard piece={{
    title: 'Title',
    author: 'John Doe',
    status: 'Evergreen',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgzyXVZkLsDs5kDO8odpdiQrRlf2dM-hIW4jnblDeL_3BQnMXi',
  }}/>
}
