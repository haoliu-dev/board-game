import Entity from "./Entity";
import TileOverlay from "./TileOverlay";
import Terrain from "./Terrain";
import TileImprovement from "./TileImprovement";

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
  overlays: Array<TileOverlay>;
  tileImprovement: TileImprovement|null;
  entities: Array<Entity>;



  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.terrain = new Terrain(TERRAINS[Math.floor(Math.random() * TERRAINS.length)]);
    this.tileImprovement = null;
    this.overlays = [];
    this.entities = [];
  }
}