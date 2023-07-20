import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: 'App/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Dark: Story = {
    render: () => <Logo user={null} isDark />,
  };

export const White: Story = {
  render: () => <Logo user={null} isDark={false} />,
};
