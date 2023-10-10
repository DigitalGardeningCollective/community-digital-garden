import type { Meta, StoryObj } from '@storybook/react'
import PersonPopover from './PersonPopover'
type Story = StoryObj<typeof PersonPopover>

export const EmptyUser: Story = {
  render: () => <PersonPopover contributor={{
    avatar_url: '',
    bio: '',
    created_at: '',
    full_name: '',
    id: '',
    updated_at: null,
    username: ''
  }}/>
}

export const ExampleUser: Story = {
  render: () => <PersonPopover contributor={{
    avatar_url: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png', 
    bio: 'Software Developer @ Acme Inc. -- Loves to write about Programming, Politics, and Productivity.',
    created_at: '',
    full_name: 'John Doe',
    id: '',
    updated_at: null,
    username: 'johndoe',
  }}/>
}

export default {
  title: 'App/PersonPopover',
  component: PersonPopover,
} as Meta<typeof PersonPopover>
