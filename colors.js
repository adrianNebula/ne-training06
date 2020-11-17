'use strict'

//Requiero saber todos los colores usados por toda mi flota que tenga la tecnomecanica vigente

const vehicles = require('./vehicles2020.json');
//fecha actual
const date = Date.now();
const response = vehicles
// fecha de expedicion mayor q fecha de vigencia tecnomecanica
.filter(vehicle => vehicle.regulatoryCompliance.technomechanicalExpirationDate >= date)
.map(veh => veh.colors)
//.reduce((array,colors) => colors );
console.log("Clores de los vehiculos con Tecnomecanica vigente :" +response);
console.log("\nCantidad total de vehiculos con estos colores : "+response.length)