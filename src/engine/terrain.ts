import HasId from "./HasId";

export default class Terrain implements HasId {
  id: string;
  name: string;
  constructor(name: string) {
    this.id = name;
    this.name = name;
  }

}
