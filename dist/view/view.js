import { Cohete } from './../classes/cohete.js';
import { CohetesController } from './../controller/controller.js';
window.addEventListener('load', onPageLoad);
let cohetesController;
function onPageLoad() {
    addEvents();
    cohetesController = new CohetesController();
}
function addEvents() {
    let createRocket1btn = document.querySelector('#createRocket1btn');
    let createRocket2btn = document.querySelector('#createRocket2btn');
    createRocket1btn.addEventListener('click', createRocket1);
    createRocket2btn.addEventListener('click', createRocket2);
    let printRocket1btn = document.querySelector('#printRocket1btn');
    let printRocket2btn = document.querySelector('#printRocket2btn');
    printRocket1btn.addEventListener('click', printRocket.bind(this, '32WESSDS'));
    printRocket2btn.addEventListener('click', printRocket.bind(this, 'LDSFJA32'));
    let printAllRocketsbtn = document.querySelector("#printAllRocketsbtn");
    printAllRocketsbtn.addEventListener('click', printAllRockets);
    let accelerateRocket1btn = document.querySelector("#accelerateRocket1btn");
    accelerateRocket1btn.addEventListener('click', accelerateRocket.bind(this, '32WESSDS'));
    let accelerateRocket2btn = document.querySelector("#accelerateRocket2btn");
    accelerateRocket2btn.addEventListener('click', accelerateRocket.bind(this, 'LDSFJA32'));
    let breakRocket1btn = document.querySelector("#breakRocket1btn");
    breakRocket1btn.addEventListener('click', breakRocket.bind(this, '32WESSDS'));
    let breakRocket2btn = document.querySelector("#breakRocket2btn");
    breakRocket2btn.addEventListener('click', breakRocket.bind(this, 'LDSFJA32'));
}
function createRocket1() {
    // const codigo = prompt('Introduce el código del Cohete');
    // const potenciaString = prompt('Introduce la potencia del Cohete');
    // let potenciaArrayString = potenciaString.split(',');
    // let potenciaArrayNumber = Array.from(potenciaArrayString, (val) => Number(val));
    // let cohete = new Cohete(codigo, potenciaArrayNumber);
    let cohete = new Cohete('32WESSDS', [10, 30, 80]);
    cohetesController.addCohete(cohete);
}
function createRocket2() {
    let cohete = new Cohete('LDSFJA32', [30, 40, 50, 50, 30, 10]);
    cohetesController.addCohete(cohete);
}
function printRocket(codigo) {
    let cohete = cohetesController.getCohete(codigo);
    if (cohete) {
        let infoDiv = document.querySelector("#info");
        infoDiv.innerHTML = cohete.getInfo();
    }
}
function printAllRockets() {
    let stringInfo = cohetesController.getAllCohetesInfo();
    let infoDiv = document.querySelector("#info");
    infoDiv.innerHTML = stringInfo;
}
function accelerateRocket(codigo) {
    let cohete = cohetesController.getCohete(codigo);
    if (cohete) {
        cohete.acelerar();
    }
}
function breakRocket(codigo) {
    let cohete = cohetesController.getCohete(codigo);
    if (cohete) {
        cohete.break();
    }
}
