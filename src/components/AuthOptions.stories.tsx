import type { Meta, StoryObj } from '@storybook/react';

import { AuthOptions } from './AuthOptions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AuthOptions> = {
  title: 'App/AuthOptions',
  component: AuthOptions,
};

export default meta;

type Story = StoryObj<typeof AuthOptions>;

export const SignedOut: Story = {
    render: () => <AuthOptions session={null} />,
  };

export const SignedIn: Story = {
  render: () => <AuthOptions session={{}} />,
};
