import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navigation> = {
  title: 'App/Navigation',
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Example: Story = {
    render: () => <Navigation />,
  };