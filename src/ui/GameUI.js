import React from 'react';
import Game from '../engine/Game';

import HexmapUI from './HexmapUI.js'

export default class GameUI extends React.Component {
  constructor(props) {
    super(props);
    const game = new Game(16,6);
    this.state = game;
  }

  render() {
    return (
      <HexmapUI map={this.state.map}></HexmapUI>
    );
  }
}