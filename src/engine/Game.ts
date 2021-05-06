/*
it represents the game world and is the single entry to find all 
resources and states in the game. There should be only one intance
of this per game.
*/

import HexMap from "./HexMap";

export default class Game {
  map: HexMap;

  // init a new empty game(in game editor)
  constructor(mapWidth:number, mapHeight:number) {
    this.map = new HexMap(mapWidth, mapHeight);
  }

}