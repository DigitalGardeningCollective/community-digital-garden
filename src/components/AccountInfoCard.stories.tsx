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

export const BenjaminCovington: Story = {
  render: () => <AccountInfoCard 
    avatarSource={'https://media.licdn.com/dms/image/C5603AQFY4clHxNJG5w/profile-displayphoto-shrink_800_800/0/1660670542956?e=2147483647&v=beta&t=WfrJiwPN9tojfgiXEWl11GIPafX_jRrjjjudRQ721qs'
  }
    name='Benjamin'
    fullName='Benjamin Covington'
    linkText='@bencovington-game'
    linkSource={'https://media.licdn.com/dms/image/C5603AQFY4clHxNJG5w/profile-displayphoto-shrink_800_800/0/1660670542956?e=2147483647&v=beta&t=WfrJiwPN9tojfgiXEWl11GIPafX_jRrjjjudRQ721qs'
  }
    description='Build Engineer'
  />
}

export default {
  title: 'App/AccountInfoCard',
  component: AccountInfoCard,
} as Meta<typeof AccountInfoCard>
