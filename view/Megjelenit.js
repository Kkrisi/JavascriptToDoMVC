

export default class TodoView {

    #lista = [];
    #reszletek = [];
    #szuloElem;
  
    constructor(lista, reszletek, szuloElem) {

      this.#lista = lista;
      this.#reszletek = reszletek;
      this.#szuloElem = szuloElem; 
      this.#szuloElem.empty();
      this.kiír();

    }
  

    kiír() {
      this.#lista.forEach((cim, index) => {
        this.osszeRak(cim, index, this.#reszletek[index]);
      });
    }
    
  
    osszeRak(cim, index, hozzaTartozo) {
      const felepitHTML = `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              ${cim}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent=".tartalom">
            <div class="accordion-body">
              <strong>Tevékenység:</strong> ${hozzaTartozo.tevekenyseg} <br />
              <strong>Határidő:</strong> ${hozzaTartozo.hatarido}
            </div>
          </div>
        </div>
      `;
  
      this.#szuloElem.append(felepitHTML);
    }
  }