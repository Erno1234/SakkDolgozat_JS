class Cella{
    #adat;
    #divElem;
    #pElem;
    constructor(id,adat, szuloElem){
        this.#adat = adat;
        this.id = id;
        szuloElem.append(`
        <div class="Tabla">
            <p>${this.#adat}</p>
        </div>
    `);
    
    this.#divElem = $(".Tabla:last-child");
    this.#pElem = $(".Tabla:last-child p");
    console.log(this.#pElem)
    this.#pElem.on("click", () => {
      this.#kattintasTrigger();
    });
    this.#szinBeallit(this.id);    
    }
    setAllapot(ertek){
            this.#pElem.text(ertek);
    }
    getAdat(){
        return this.#adat;
    }
    #szinBeallit(id){
        if(id % 2 == 0){
            $(this.#divElem).css("background-color","rgb(163,82,78)");
        }else{
            $(this.#divElem).css("background-color","rgb(242,232,231)");
        }
    }
    #kattintasTrigger(){
        const esemeny = new CustomEvent("lepes", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default Cella