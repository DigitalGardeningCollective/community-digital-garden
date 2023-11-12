import type { Meta, StoryObj } from '@storybook/react';
import { NeverStopLearning } from './NeverStopLearning';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof NeverStopLearning>

export const Default: Story = {
    render: () => <NeverStopLearning/>
}

export default {
    title: 'App/NeverStopLearning',
    component: NeverStopLearning,
} as Meta<typeof NeverStopLearning>
  