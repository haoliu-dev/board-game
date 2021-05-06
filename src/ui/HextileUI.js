import React from 'react';

const FN_NOOP = function () { }
export default class HextileUI extends React.Component {
  constructor(props) {
    super(props);
    if (!props.hextile) {
      console.error('props.hextile is required');
    }
    this.onClick = props.onClick || FN_NOOP;
    this.state = props.hextile;
  }


  render() {
    const hextile = this.props.hextile;
    const firstColClassName = ((hextile.y === 0) && (hextile.x % 2 === 1)) ? 'first-col' : '';
    const building = hextile.building ? (<span>{`${hextile.building.name}(${hextile.building.level})`}</span>) : null;
    return (
      <div className={`hextile ${firstColClassName} terrain-${hextile.terrain.name}`}
        onClick={() => this.onClick(this, this.props.hextile)}
      >
        {building}
      </div>
    );

  }

}