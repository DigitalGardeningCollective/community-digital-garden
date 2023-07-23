import type { Meta, StoryObj } from '@storybook/react';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';
import { Header } from './Header';
import { useDisclosure } from '@chakra-ui/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'App/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

const HeaderWithHook = () => {
    const { onOpen } = useDisclosure();
    const items: LinkItem[] = [
        { label: "Home", icon: FiHome, href: "/" },
        { label: "Tab 2", icon: FiStar, href: "/" },
        { label: "Tab 3", icon: FiStar, href: "/" },
        { label: "Tab 4", icon: FiStar, href: "/" },
      ]
    return <Header linkItems={items} onOpen={onOpen} />;
}

export const Example: Story = {
    render: () => <HeaderWithHook />,
  };