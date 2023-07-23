import type { Meta, StoryObj } from '@storybook/react'
import AccountInfoCard from './AccountInfoCard'

type Story = StoryObj<typeof AccountInfoCard>

export const EmptyUser: Story = {
  render: () => <AccountInfoCard/>
}

export const ExampleUser: Story = {
  render: () => <AccountInfoCard 
    avatarSource='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png' 
    name='John' 
    fullName='John Doe' 
    linkText='@johndoe' 
    linkSource='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'
    description='Software Developer @ Acme Inc. -- Loves to write about Programming, Politics, and Productivity.'
  />
}

export default {
  title: 'App/AccountInfoCard',
  component: AccountInfoCard,
} as Meta<typeof AccountInfoCard>
