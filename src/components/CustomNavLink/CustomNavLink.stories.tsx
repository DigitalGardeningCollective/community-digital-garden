import type { Meta, StoryObj } from '@storybook/react';
import { FiHome } from 'react-icons/fi';
import { CustomNavLink } from './CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomNavLink> = {
  title: 'App/CustomNavLink',
  component: CustomNavLink,
};

export default meta;

type Story = StoryObj<typeof CustomNavLink>;

const link = { label: "Home", icon: FiHome, href: "/" }

export const Example: Story = {
    render: () => <CustomNavLink link={link} />,
  };