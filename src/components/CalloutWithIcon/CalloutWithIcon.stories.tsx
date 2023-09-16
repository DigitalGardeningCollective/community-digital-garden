import { Meta, StoryObj } from '@storybook/react';
import { CalloutWithIcon } from './CalloutWithIcon';
import { FiStar } from "react-icons/fi";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CalloutWithIcon> = {
  title: 'App/CalloutWithIcon',
  component: CalloutWithIcon,
};

export default meta;

type Story = StoryObj<typeof CalloutWithIcon>;

export const Example: Story = {
    render: () => <CalloutWithIcon 
                    color='tomato'
                    text='This is a callout'
                    icon={<FiStar />}
                    title='Editing' />,
  };
