
import { TODOLIST, TODOLIST2 } from './adatok.js';




export default class TodoModel {

  #lista = [];
  #reszletek = [];

  constructor() {
    this.#lista = TODOLIST;
    this.#reszletek = TODOLIST2;
  }


  getLista() {
    return this.#lista;
  }


  getReszletek() {
    return this.#reszletek;
  }
}