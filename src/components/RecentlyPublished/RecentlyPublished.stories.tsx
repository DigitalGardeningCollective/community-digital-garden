import type { Meta, StoryObj } from '@storybook/react';
import { RecentlyPublished } from './RecentlyPublished';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof RecentlyPublished>

export const Default: Story = {
    render: () => <RecentlyPublished/>
}

export default {
    title: 'App/RecentlyPublished',
    component: RecentlyPublished,
} as Meta<typeof RecentlyPublished>
  