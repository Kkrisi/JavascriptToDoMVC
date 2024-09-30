
import TodoModel from '../model/Modell.js';
import TodoView from '../view/Megjelenit.js';




export default class TodoController {

  constructor() {

    this.todoModel = new TodoModel();
    
    const cim = this.todoModel.getLista();
    const reszletek = this.todoModel.getReszletek();

    this.szuloElem = $(".tartalom");

    new TodoView(cim, reszletek, this.szuloElem);


    this.esemenyKezelo();
  }



  esemenyKezelo() {
    $(window).on("klikkel", (event) => {
      const index = event.detail;

      // Get the updated todo titles and details and re-render the view
      const frissitettCim = this.todoModel.getLista();
      const frissitettReszletek = this.todoModel.getReszletek();
      
      new TodoView(frissitettCim, frissitettReszletek, this.szuloElem);

    });
  }
}