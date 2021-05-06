import React from 'react';
import Game from '../engine/Game';
import HexmapUI from './HexmapUI.js';

export default class GameEditorUI extends React.Component {
  constructor(props) {
    super(props);

    const game = new Game(16, 6);
    this.state = {
      game: game,
      brush: null,
    };
  }

  render() {
    const terrainBrushes = ['plain', 'hill', 'water'].map(terrain => {
      return (
        <button key={`brush-${terrain}`} onClick={() => this.toggleBrush(terrain)}
          className={this.state.brush === terrain ? 'selected' : ''}>
          {terrain}
        </button>

      )
    })
    return (
      <div>
        <div className="toolbar">
          {terrainBrushes}
        </div>
        <HexmapUI mode='edit' map={this.state.game.map} brush={this.state.brush}></HexmapUI>
      </div>
    );
  }

  toggleBrush(brush) {
    const oldBrush = this.state.brush;
    this.setState({ brush: (brush === oldBrush ? null : brush) });
  }
}