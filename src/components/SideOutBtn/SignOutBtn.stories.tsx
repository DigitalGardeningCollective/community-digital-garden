import type { Meta, StoryObj } from '@storybook/react';
import { SignOutBtn } from './SignOutBtn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SignOutBtn> = {
  title: 'App/SignOutBtn',
  component: SignOutBtn,
};

export default meta;

type Story = StoryObj<typeof SignOutBtn>;

export const Example: Story = {
    render: () => <SignOutBtn />,
  };