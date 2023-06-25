import type { Meta, StoryObj } from '@storybook/react';

import { UserLayout } from './UserLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserLayout> = {
  title: 'App/UserLayout',
  component: UserLayout,
};

export default meta;

type Story = StoryObj<typeof UserLayout>;

export const WithParagraph: Story = {
    render: () => <UserLayout><p>Hello</p></UserLayout>,
  };
