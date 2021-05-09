import React from 'react';
import Game from '../engine/Game';
import TileImprovement from '../engine/TileImprovement';
import Terrain from '../engine/Terrain';
import HexmapUI from './HexmapUI.js';

export default class GameEditorUI extends React.Component {
  constructor(props) {
    super(props);

    const game = new Game(16, 6);
    this.state = {
      game: game,
      brush: null,
    };
    this.createEventHandlers();
  }


  render() {
    const terrainBrushes = ['plain', 'hill', 'water'].map(terrainName => {
      return (
        <button key={`terrain-${terrainName}`}
          onClick={() => this.toggleBrush({ type: 'terrain', name: terrainName })}
          className={this.state.brush?.name === terrainName ? 'selected' : ''}>
          {terrainName}
        </button>

      )
    });
    const tileImprovementBrushes = ['city', 'pier', 'market', 'barrack', '关隘 '].map(tileImprovementName => {
      return (
        <button key={`tileImprovement-${tileImprovementName}`}
          onClick={() => this.toggleBrush({ type: 'tileImprovement', name: tileImprovementName })}
          className={this.state.brush?.name === tileImprovementName ? 'selected' : ''}>
          {tileImprovementName}
        </button>

      )
    });
    return (
      <div>
        <div className="toolbar">
          {terrainBrushes}
          | {tileImprovementBrushes}
        </div>
        <HexmapUI
          map={this.state.game.map}
          onTileClick={this.onTileClick}
        ></HexmapUI>
      </div>
    );
  }

  toggleBrush(brush) {
    const oldBrush = this.state.brush;
    this.setState({ brush: (brush.name === oldBrush?.name ? null : brush) });
  }

  createEventHandlers() {
    // on Hextile clicked:
    // if a brush is selected, replce the tile terrain or add tileImprovement
    // it requires the Hextile component to be passed in so we can force update the component
    this.onTileClick = (component, hextile) => {
      const brush = this.state.brush || {};
      switch (brush.type) {
        case 'terrain':
          // set terrain as in the brush
          hextile.terrain = new Terrain(this.state.brush.name);
          component.forceUpdate();
          break;
        case 'tileImprovement':
          // if same buildeing is there, upgrade to up to level 3, then remove it
          if(hextile.tileImprovement?.name === brush.name) {
            if(hextile.tileImprovement.level<3) {
              hextile.tileImprovement.level+=1;
            } else {
              hextile.tileImprovement = null;
            }
          } else { // otherwise, add the new tileImprovement
            hextile.tileImprovement = new TileImprovement(brush.name, 1);

          }
          component.forceUpdate();
          break;
        default:
          console.error('unrecognized brush');
          console.log(this.state.brush);
      }
    }

  }
}