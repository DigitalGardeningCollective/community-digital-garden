import type { Meta, StoryObj } from '@storybook/react';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';
import { useDisclosure } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Sidebar> = {
  title: 'App/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const SidebarWithHook = () => {
    const { onClose } = useDisclosure();
    const items: LinkItem[] = [
        { label: "Home", icon: FiHome, href: "/" },
        { label: "Tab 2", icon: FiStar, href: "/" },
        { label: "Tab 3", icon: FiStar, href: "/" },
        { label: "Tab 4", icon: FiStar, href: "/" },
      ]
    return <Sidebar linkItems={items} onClose={onClose} />;
}

export const Example: Story = {
    render: () => <SidebarWithHook />,
  };