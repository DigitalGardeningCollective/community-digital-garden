import type { Meta, StoryObj } from '@storybook/react';

import { AuthOptions } from './AuthOptions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AuthOptions> = {
  title: 'App/AuthOptions',
  component: AuthOptions,
};

export default meta;

type Story = StoryObj<typeof AuthOptions>;

export const SignedOutNotSideBar: Story = {
    render: () => <AuthOptions user={null} isInSideBar={false} />,
  };

export const SignedInNotSideBar: Story = {
  render: () => <AuthOptions user={{}} isInSideBar={false} />,
};

export const SignedOutInSideBar: Story = {
  render: () => <AuthOptions user={null} isInSideBar />,
};

export const SignedInInSideBar: Story = {
render: () => <AuthOptions user={{}} isInSideBar />,
};
