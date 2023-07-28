import type { Meta, StoryObj } from '@storybook/react';

import { Backlink } from "./Backlink";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Backlink> = {
  title: 'App/Backlink',
  component: Backlink,
};

export default meta;

type Story = StoryObj<typeof Backlink>;

const backlink1 = {
  avatarUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVh2ALrbWhU_kdcsEqP_ECUASOOANyYd8NAoDOllt3A&s",
  title: "Behold I am a banana",
  description: "As the title states, I am a banana",
  fullUrl: "https://google.com/s/photos/random",
};

export const WithDescription: Story = {
  render: () => <Backlink backlink={backlink1} />,
};
