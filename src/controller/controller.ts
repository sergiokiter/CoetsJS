import { Cohete } from '../classes/cohete';

export class CohetesController {
  cohetes: Cohete[] = [];

  constructor() {
    
  }

  addCohete(cohete: Cohete): void {
    this.cohetes.push(cohete);
    alert(`Cohete ${cohete.codigo} añadido!`);
    if (this.cohetes.length < 2 || this.cohetes.length > 99999999 ) {
      alert('Debe haber entre 2 cohetes y 99999999 cohetes');
    }
  }

  getCohete(codigo: String): Cohete {
    const cohete = this.cohetes.find(cohete => cohete.codigo === codigo);
    if (!cohete) {
      alert('No existe ese cohete');
    }
    return cohete;
  }

  getAllCohetesInfo(): string {
    let stringInfo = ''
    this.cohetes.forEach(cohete => {
      stringInfo += `${cohete.getInfo()}<br/>`
    })
    if (!stringInfo) {
      alert('No hay Cohetes');
    }
    return stringInfo;
  }
}