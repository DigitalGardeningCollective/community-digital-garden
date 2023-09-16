import { EmbeddedVideo } from './EmbeddedVideo'
import { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof EmbeddedVideo> = {
  title: 'App/EmbeddedVideo',
  component: EmbeddedVideo,
};

export default meta;

type Story = StoryObj<typeof EmbeddedVideo>;

export const Example: Story = {
    render: () => <EmbeddedVideo 
                      videoId='1yOnRAkMwpc' 
                    />
  };