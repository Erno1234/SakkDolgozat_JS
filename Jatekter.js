import Cella from "./Cella.js";
class Jatekter{
    #allapotLista =[];
    #elemLista = [];
    #lepes;
    constructor(allapotLista){
        this.#allapotLista = allapotLista;
         const szuloElem = $("#jatekter");
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const tabla = new Cella(index, this.#allapotLista[index],szuloElem);
            this.#elemLista.push(tabla);
        }
        $(window).on("lepes", (event) => {
            let aktElem = event.detail;
            let aktIndex =aktElem.id;
            aktElem.setAllapot();
            aktIndex =aktElem.id;
            let figura = aktElem.getAdat();
            if(allapotLista[aktIndex] ==="♟"){
                this.#allapotLista[aktIndex] = "";
                this.#allapotLista[aktIndex+3].setAllapot(figura);
            }
            if(allapotLista[aktIndex] ==="♙"){
                this.#allapotLista[aktIndex] = "";
                this.#allapotLista[aktIndex-3].setAllapot(figura);
            }      
        });
      
    }

}
export default Jatekter