import React from 'react';
import Game from '../engine/Game';

import HexmapUI from './HexmapUI.js';
import TileMenu from './TileMenu';

export default class GameUI extends React.Component {
  constructor(props) {
    super(props);
    const game = new Game(12, 6);
    this.state = {
      game: game,
      selectedTile: null,
    };
    this.createEventHandlers();
  }

  createEventHandlers() {
    this.onTileClick = (component, hextile)=>{
      this.setState({selectedTile: hextile});

    }
  }

  render() {
    return (
      <div>
        <TileMenu tile={this.state.selectedTile}></TileMenu>

        <HexmapUI
         map={this.state.game.map}
         onTileClick={this.onTileClick}>

         </HexmapUI>

      </div>
    );
  }
}