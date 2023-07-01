import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Layout> = {
  title: 'App/Layout',
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const WithParagraph: Story = {
    render: () => <Layout><p>Hello</p></Layout>,
  };
