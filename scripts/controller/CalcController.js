class CalcController {

    constructor() {

        // Atributos privados
        this._displayCalc = "0";
        this._currentDate;

        this.initialize();

    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "14/04/2010";
        timeEl.innerHTML = "14:00";

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc( value ) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate( value ) {
        this._currentDate = value;
    }

}