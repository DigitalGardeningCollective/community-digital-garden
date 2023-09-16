import type { Meta, StoryObj } from '@storybook/react';
import { NavigationTabs } from './NavigationTabs';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavigationTabs> = {
  title: 'App/NavigationTabs',
  component: NavigationTabs,
};

export default meta;

type Story = StoryObj<typeof NavigationTabs>;

const items: LinkItem[] = [
    { label: "Home", icon: FiHome, href: "/" },
    { label: "Tab 2", icon: FiStar, href: "/" },
    { label: "Tab 3", icon: FiStar, href: "/" },
    { label: "Tab 4", icon: FiStar, href: "/" },
  ]

export const NotInSideBar: Story = {
    render: () => <NavigationTabs user={null} linkItems={items} isInSidebar={false} hasCenteredTabs />,
  };

export const InSideBar: Story = {
render: () => <NavigationTabs user={null} linkItems={items} isInSidebar hasCenteredTabs={false} />,
};