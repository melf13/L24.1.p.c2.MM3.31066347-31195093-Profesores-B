import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this.horas = horas
    }
    extrascontratado() {
        return this.horas * 10
    }

    ingresototal () {
        return this.bono + this.extrascontratado()
    }

}