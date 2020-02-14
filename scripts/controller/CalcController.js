class CalcController {

    constructor() {

        // Atributos privados

        this._locale = 'pt-BR';

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate = this.currentDate

        this.initialize();
        this.initButtonsEvents();

    }

    initialize() {

        // Inicia o display com a data e hora
        this.setDisplayDateTime();

        setInterval(() => {

            // Atualiza o display com a data e hora a cada 1s
            this.setDisplayDateTime();
            
        }, 1000);

    }

    initButtonsEvents(){
        
        let buttons = document.querySelectorAll("#buttons > g, #parts >g");
       
        buttons.forEach( (btn, index) => {
            btn.addEventListener("click", e => {
                
                // Retorna o nome da classe do elemento
                //console.log(btn.className.baseVal);

                // Retorna o nome da classe removendo (replace) a palavra btn-
                console.log(btn.className.baseVal.replace("btn-", ""));
                
            });
        })

    }

    // Método para setar a data e hora no display
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime( value ) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate( value ) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc( value ) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate( value ) {
        this._currentDate = value;
    }

}