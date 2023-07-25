// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Backlink> = (args) => {
//   return <Backlink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from "@storybook/react";

import Backlink from "./Backlink";

// const backlink1 = {
//   avatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVh2ALrbWhU_kdcsEqP_ECUASOOANyYd8NAoDOllt3A&s',
//   title: 'Behold I am a banana',
//   description: 'As the title states, I am a banana',
//   fullUrl: 'https://unsplash.com/s/photos/random',
// };

// const backlink2 = {
//   avatarUrl:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVh2ALrbWhU_kdcsEqP_ECUASOOANyYd8NAoDOllt3A&s',
//   title: 'Behold I am a banana',
//   description: '',
//   fullUrl: 'https://unsplash.com/s/photos/random',
// };

export const withDescription = () => {
  const backlink1 = {
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVh2ALrbWhU_kdcsEqP_ECUASOOANyYd8NAoDOllt3A&s",
    title: "Behold I am a banana",
    description: "As the title states, I am a banana",
    fullUrl: "https://google.com/s/photos/random",
  };

  return <Backlink backlink={backlink1} />;
};

export default {
  title: "Components/Backlink",
  component: Backlink,
} as ComponentMeta<typeof Backlink>;
