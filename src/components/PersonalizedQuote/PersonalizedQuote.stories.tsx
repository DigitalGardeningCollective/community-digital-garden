import { PersonalizedQuote } from './PersonalizedQuote'
import { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PersonalizedQuote> = {
  title: 'App/PersonalizedQuote',
  component: PersonalizedQuote,
};

export default meta;

type Story = StoryObj<typeof PersonalizedQuote>;

export const Example: Story = {
    render: () => <PersonalizedQuote 
                      coverUrl='/images/conrad.png'
                      name='Conrad Lin'
                      quote='Hello World! This is an example.'
                      color='#2d3738'
                    />
  };
