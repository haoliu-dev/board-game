import React from 'react';
import Game from '../engine/Game';
import Building from '../engine/Building';
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
    const buildingBrushes = ['city', 'farm', 'pier', 'market'].map(buildingName => {
      return (
        <button key={`building-${buildingName}`}
          onClick={() => this.toggleBrush({ type: 'building', name: buildingName })}
          className={this.state.brush?.name === buildingName ? 'selected' : ''}>
          {buildingName}
        </button>

      )
    });
    return (
      <div>
        <div className="toolbar">
          {terrainBrushes}
          | {buildingBrushes}
        </div>
        <HexmapUI
          mode='edit'
          map={this.state.game.map}
          brush={this.state.brush}
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
    // if a brush is selected, replce the tile terrain or add building
    // it requires the Hextile component to be passed in so we can force update the component
    this.onTileClick = (component, hextile) => {
      const brush = this.state.brush || {};
      switch (brush.type) {
        case 'terrain':
          // set terrain as in the brush
          hextile.terrain = new Terrain(this.state.brush.name);
          component.forceUpdate();
          break;
        case 'building':
          // if same buildeing is there, upgrade to up to level 3, then remove it
          if(hextile.building?.name === brush.name) {
            if(hextile.building.level<3) {
              hextile.building.level+=1;
            } else {
              hextile.building = null;
            }
          } else { // otherwise, add the new building
            hextile.building = new Building(brush.name, 1);

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