import type { Meta, StoryObj } from '@storybook/react';
import { LinkCard } from './LinkCard';
import { FiHome, FiStar } from 'react-icons/fi';
import { LinkItem } from '../CustomNavLink/CustomNavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof LinkCard>

export const Default: Story = {
    render: () => <LinkCard 
        imageSrc='https://miro.medium.com/v2/resize:fill:176:176/0*SCbUIuPVPJMm82S4.png'
        headerText='Link Card'
        footerLink='https://the.x3.family/'
        footerText='Welcome ->'/>
}

export default {
    title: 'App/LinkCard',
    component: LinkCard,
} as Meta<typeof LinkCard>
  