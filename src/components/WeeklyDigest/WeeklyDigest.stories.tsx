import type { Meta, StoryObj } from '@storybook/react';
import { WeeklyDigest } from './WeeklyDigest';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof WeeklyDigest>

export const Default: Story = {
    render: () => <WeeklyDigest/>
}

export default {
    title: 'App/WeeklyDigest',
    component: WeeklyDigest,
} as Meta<typeof WeeklyDigest>
  