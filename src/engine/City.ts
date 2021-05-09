import HasId from './HasId';

export default class City implements HasId {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
}