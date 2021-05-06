import Entity from "./entity";
import TileOverlay from "./overlay";
import Terrain from "./terrain";

// FIXME: dynamically load it from game spec file
const TERRAINS = ['plain', 'plain-grass', 'plain-tree', 'hill', 'hill-grass', 'hill-tree', 'water'];
 
export default class HexTile {
   // tile position
  x: number;
  y: number;
  // attributes
  // 0:sea level| 1:Shanxi | 2:Guizhou | 3:Xizang | 4(human impassible)
  elevation: number = 0;

  terrain: Terrain;
  // on-groud overlays: can be resources, building and plants
  overlay: Array<TileOverlay>;
  // movable objects on this tile
  entities: Array<Entity>;



  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.terrain = new Terrain(TERRAINS[Math.floor(Math.random() * TERRAINS.length)]);
    this.overlay = [];
    this.entities = [];
  }
}