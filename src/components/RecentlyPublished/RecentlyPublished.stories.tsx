import type { Meta, StoryObj } from '@storybook/react';
import { RecentlyPublished } from './RecentlyPublished';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof RecentlyPublished>

export const Default: Story = {
    render: () => <RecentlyPublished/>
}

export default {
    title: 'App/RecentlyPublished',
    component: RecentlyPublished,
} as Meta<typeof RecentlyPublished>
  