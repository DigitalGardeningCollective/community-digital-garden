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
export const Primary: Story = {
  render: ({title, author, tag, img}) => <PieceCard title={title} author={author} tag={tag} img={img} />,
};

// export const Secondary: Story = {
//   render: () => <Button backgroundColor="#ff0" label="😄👍😍💯" />,
// };

// export const Tertiary: Story = {
//   render: () => <Button backgroundColor="#ff0" label="📚📕📈🤓" />,
// };
