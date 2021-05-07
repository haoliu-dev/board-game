/*
a Registry for one type of HasId objects, like Terrain, TileImprovements...
*/

import HasId from "./HasId";

export default class Registry<T extends HasId> {
  // hash map contains key -> T(resource)
  map: Map<string, T>;
  constructor() {
    this.map = new Map();
  }

  add(obj: T) { 
    this.map.set(obj.id, obj);
  }
  remove(id: string) {
    this.map.delete(id);
   }
  get(id: string) { 
    return this.map.get(id);
  }
  values() {
    return this.map.values;
  }
}