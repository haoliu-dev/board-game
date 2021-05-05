export default class HexTile {
  // tile position
  x: number;
  y: number;
  // attributes
  // 0:sea level| 1:Shanxi | 2:Guizhou | 3:Xizang | 4(human impassible)
  elevation: number = 0;
  // plain|hill|water|sea|meadow
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