import React from "react";
import Search from "./Search";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Search> = {
    component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
    args: {
        search: "hello"
    },
};

