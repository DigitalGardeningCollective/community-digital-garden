import React from "react";
import { SearchModal } from "./SearchModal";
import {Meta, StoryObj} from "@storybook/react";

// const SearchModal = () => {
//     const { searchButton, searchModal } = useSearchModal()
//     return [searchButton, searchModal]
// }

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
type Story = StoryObj<typeof SearchModal>

export const Default: Story = {
    render: () => <SearchModal />
}

export default {
    title: 'App/SearchModal',
    component: SearchModal,
} as Meta<typeof SearchModal>
  
