// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'
import AccountInfoCard from './AccountInfoCard'
// import CalloutWithIcon from './CalloutWithIcon'
// import { FiStar } from "react-icons/fi";

const src = 'https://media.licdn.com/dms/image/C5603AQFY4clHxNJG5w/profile-displayphoto-shrink_800_800/0/1660670542956?e=2147483647&v=beta&t=WfrJiwPN9tojfgiXEWl11GIPafX_jRrjjjudRQ721qs'
// const src = 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'

export const generated = () => 
<AccountInfoCard 
    src={src}
    name='Benjamin'
    fullName='Benjamin Covington'
    link='@bencovington-game'
    bio='Build Engineer'
/>

export default {
  title: 'App/AccountInfoCard',
  component: AccountInfoCard,
} as Meta<typeof AccountInfoCard>
