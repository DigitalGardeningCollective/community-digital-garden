import type { Meta, StoryObj } from '@storybook/react';

import Comment from './Comment';

const meta: Meta<typeof Comment> = {
  component: Comment,
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Invalid: Story = {
  args: {
    fullName: "John Smith",
    avatarURL: "[avatar]",
    origin: "[origin]",
    content: "This is a great idea!",
    dateTime: "June 21, 2013 at 10:14am",
  },
};

export const Valid: Story = {
  args: {
    fullName: "Swetha Vijayakumar",
    avatarURL: "https://media.licdn.com/dms/image/C5603AQFyazsj2e-0Ug/profile-displayphoto-shrink_800_800/0/1656084050114?e=1696464000&v=beta&t=ZjY8_Gt1NPXMo0pr_iEnQG4x4bSq19XpPpw6E6GLWR4",
    origin: "Reddit",
    content: "I think I'm heading in the right direction!",
    dateTime: "June 21, 2023 at 10:05am",
  },
};

