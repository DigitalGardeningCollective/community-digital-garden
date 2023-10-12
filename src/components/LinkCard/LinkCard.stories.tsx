import type { Meta, StoryObj } from '@storybook/react';
import { LinkCard } from './LinkCard';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof LinkCard>

export const Default: Story = {
    render: () => <LinkCard 
        imageSrc='/images/co-x3-graphic.png'
        headerText='Link Card'
        footerLink='https://the.x3.family/'
        footerText='Welcome ->'/>
}

export default {
    title: 'App/LinkCard',
    component: LinkCard,
} as Meta<typeof LinkCard>
  