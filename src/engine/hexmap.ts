/*
A Hex-tile based map, like what we see in civilization 6, with the following traits
- the map has immutable size
- each tile connects to six tiles attaching to the its six edges
The tiles layout are as below: one line represents one tile row, and one brackets represents one tile
   (0,0) (0,1) (0,2) (0,3)
(1,-1) (1,1) (1,2) (1,3) (1,4)
   (2,0) (2,1) (2,2) (2,3)
(3,-1) (3,1) (3,2) (3,3) (3,4)
*/
export default class HexMap {
  // map width and height in tile count
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}