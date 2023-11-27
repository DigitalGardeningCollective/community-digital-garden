import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: 'App/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

// TODO: Figure out how to support Next's Image component in Storybook (ex. https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415)

export const Dark: Story = {
    render: () => <Logo auth={null} isDark />,
  };

export const White: Story = {
  render: () => <Logo auth={null} isDark={false} />,
};
