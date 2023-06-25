import type { Meta, StoryObj } from '@storybook/react';
import { NavigationTabs } from './NavigationTabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavigationTabs> = {
  title: 'App/NavigationTabs',
  component: NavigationTabs,
};

export default meta;

type Story = StoryObj<typeof NavigationTabs>;

export const NotInSideBar: Story = {
    render: () => <NavigationTabs isInSidebar={false} />,
  };

export const InSideBar: Story = {
render: () => <NavigationTabs isInSidebar />,
};