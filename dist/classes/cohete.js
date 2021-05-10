export class Cohete {
    constructor(codigo, propulsoresMax) {
        this.codigo = '';
        this.propulsoresMax = [];
        this.potenciaActual = [];
        if (codigo.length !== 8) {
            alert('El código del cohete tiene que tener 8 caracteres');
            return;
        }
        this.codigo = codigo;
        this.propulsoresMax = propulsoresMax;
        this.potenciaActual = Array.from({ length: propulsoresMax.length }, (v, i) => 0);
        this.getPotenciaMax();
    }
    getPotenciaMax() {
        this.potenciaMax = 0;
        this.propulsoresMax.forEach(propulsorMax => {
            this.potenciaMax += propulsorMax;
        });
        return this.potenciaMax;
    }
    getInfo() {
        let info = `Rocket: ${this.codigo} | Booster Max Power ${this.propulsoresMax.toString()} | Actual Power ${this.potenciaActual.toString()}`;
        return info;
    }
    acelerar() {
        this.propulsoresMax.forEach((propMax, index) => {
            if (propMax > this.potenciaActual[index]) {
                this.potenciaActual[index] += 10;
            }
        });
    }
    break() {
        this.propulsoresMax.forEach((propMax, index) => {
            if (this.potenciaActual[index] !== 0) {
                this.potenciaActual[index] -= 10;
            }
        });
    }
}
