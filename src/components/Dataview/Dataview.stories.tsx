import type { Meta, StoryObj } from '@storybook/react';
import { DataLayout, Dataview } from './Dataview';
import { Published_Piece_View } from '@/types/manual';
import { PieceCard } from '../PieceCard/PieceCard';
import { pieceUniformDataRetrieval } from '@/types/utilities';
import { essays } from './mockData';

// Note: Storybook isn't working for me at the moment.


const meta: Meta<typeof Dataview> = {
  title: 'App/Dataview',
  component: Dataview,
};

export default meta;
type Story = StoryObj<typeof Dataview>;


/*
*👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */



// shows the example displayed in the wireframe
export const Default: Story = {

  render: () => 
    <Dataview<Published_Piece_View>
        layout={DataLayout.Grid}
        total={10} 
        numberToShow={9}
        numberPerRow={3}
        uniformDataRetrievalMethod={pieceUniformDataRetrieval}
        Component={PieceCard}
        hasMockData
        mockData={essays}
    />
}
