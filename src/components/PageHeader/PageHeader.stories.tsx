import type { Meta, StoryObj } from '@storybook/react';

import { PageHeader } from './PageHeader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PageHeader> = {
  title: 'App/PageHeader',
  component: PageHeader,
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Example: Story = {
    render: () => <PageHeader title="Notes" subtitle="A collection of atomic notes, i.e. a single idea or a single object of attention." />,
  };
