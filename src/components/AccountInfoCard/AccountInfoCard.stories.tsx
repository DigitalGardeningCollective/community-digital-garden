import type { Meta, StoryObj } from '@storybook/react'
import AccountInfoCard from './AccountInfoCard'

type Story = StoryObj<typeof AccountInfoCard>

export const EmptyUser: Story = {
  render: () => <AccountInfoCard contributor={{
    avatar_url: '', 
    full_name: '',
    username: '',
    bio: '',
  }}/>
}

export const ExampleUser: Story = {
  render: () => <AccountInfoCard contributor={{
    avatar_url: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png', 
    bio: 'Software Developer @ Acme Inc. -- Loves to write about Programming, Politics, and Productivity.',
    full_name: 'John Doe',
    username: 'johndoe',
  }}
  />
}

export default {
  title: 'App/AccountInfoCard',
  component: AccountInfoCard,
} as Meta<typeof AccountInfoCard>
