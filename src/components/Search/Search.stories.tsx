import React from "react";
import {Search} from "./Search";
import {Meta, StoryObj} from "@storybook/react";

type Story = StoryObj<typeof Search>

export const Default: Story = {
    render: () => <Search/>
}

export default {
    title: 'App/Search',
    component: Search,
} as Meta<typeof Search>
  


