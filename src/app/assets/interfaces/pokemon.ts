import {Spawn} from './spawn';
export interface Pokemon {
  'id': number;
  'attack': number;
  'defense': number;
  'stamina': number;
  'name': string;
  'spawns': Spawn[];
}
