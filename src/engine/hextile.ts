export default class HexTile {
  // tile position
  x: number;
  y: number;
  // attributes
  elevation: number = 0;
  // plain|hill|peak|water|sea|meadow
  terrain: string = 'plain';
  // none|tundra|ice|forest|grass
  modifier: string = "none";
  // none|copper|iron|coal|oil
  resource: string = "none"


  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}