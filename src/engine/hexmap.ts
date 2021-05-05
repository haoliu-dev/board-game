import HexTile from "./hextile";

/*
A Hex-tile based map, like what we see in civilization 6, with the following traits
- the map has immutable size
- each tile connects to six tiles attaching to the its six edges
The tiles layout are as below:
the even number row is positioned half tile right compared to odd number rows
   (0,0) (0,1) (0,2) (0,3)
(1,-1) (1,1) (1,2) (1,3) (1,4)
   (2,0) (2,1) (2,2) (2,3)
(3,-1) (3,1) (3,2) (3,3) (3,4)
*/
export default class HexMap {
  // map width and height in tile count
  width: number;
  height: number;
  tiles: Array<HexTile>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    // populate tiles
    const tileCount = width * height;
    this.tiles = new Array(tileCount);
    for (let i = 0; i < tileCount; i++) {
      const [x, y] = this._index2coordinate(i);
      this.tiles[i] = new HexTile(x, y);
    }
  }

  // tile coordination <-> index converter
  private _coordinate2index(x: number, y: number) {
    return y * this.width + x;
  }
  private _index2coordinate(idx: number) {
    return [Math.floor(idx / this.width), idx % this.width];
  }
}