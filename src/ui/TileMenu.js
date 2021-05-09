import React from 'react';
export default class TileMenu extends React.Component {


  render() {
    const tile = this.props.tile;
    if(tile) {
      return (
        <ul>
          Tile: ({tile.x},{tile.y})
          <li><button>Build City</button></li>
        </ul>
      );
    } else {
      return null;
    }
    
  };
}
