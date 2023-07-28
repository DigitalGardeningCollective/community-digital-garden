import type { Meta, StoryObj } from '@storybook/react';

import { ModeratorLayout } from './ModeratorLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModeratorLayout> = {
  title: 'App/Layout/ModeratorLayout',
  component: ModeratorLayout,
};

export default meta;

type Story = StoryObj<typeof ModeratorLayout>;

export const WithParagraph: Story = {
    render: () => <ModeratorLayout><p>Hello</p></ModeratorLayout>,
  };
