/*
it represents the game world and is the single entry to find all 
resources and states in the game. There should be only one intance
of this per game.
*/

import HexMap from "./HexMap";
import Registry from "./Registry";
import Terrain from "./Terrain";

export default class Game {
  map: HexMap;
  // game spec registry
  terrainRegistry: Registry<Terrain>;
  


  // init a new empty game(in game editor)
  constructor(mapWidth:number, mapHeight:number) {
    this.map = new HexMap(mapWidth, mapHeight);
    this.terrainRegistry = new Registry();
  }

}