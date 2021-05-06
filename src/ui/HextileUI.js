import React from 'react';

export default class HextileUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.hextile;
  }


  render() {
    const hextile = this.state;
    const firstColClassName = ((hextile.y === 0) && (hextile.x % 2 === 1)) ? 'first-col' : '';
    return (
      <div className={`hextile ${firstColClassName} terrain-${hextile.terrain.name}`} onClick={this.updateElevation}>

      </div>
    );

  }

  // event handlers
  updateElevation = () => {
    console.log(`you clicked a tile of ${this.state.terrain.name}`);
  }
}