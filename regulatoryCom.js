'use strict'
/* listado de vehiculos (placa) que tengan alguna de las regulatoryCompliance proxima a vencer 
(vayan a vencer en los proximos 2 meses)
       ['MNP123', 'SDF333', 'ASD222']
*/
const vehicles = require('./vehicles2020.json');
//fecha actual + dos meses
let date = Date.now() + (86400000 * 60); 

const response = vehicles
// comparamos entre la fecha actual y la fecha dentro de 2 meses asignada a "date"
.filter(vehicle => 
    (vehicle.regulatoryCompliance.technomechanicalExpirationDate >= Date.now() &&
        vehicle.regulatoryCompliance.technomechanicalExpirationDate < date) || 
    (vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate>= Date.now() && 
        vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate < date) ||
    (vehicle.regulatoryCompliance.operationCardExpirationDate>= Date.now() &&
    vehicle.regulatoryCompliance.operationCardExpirationDate < date))

.map(vehicle => {
    // declaramos data = objeto json q sera llenado con los datos
    //declaramos newArr como nuevo array conteniendo al json
      const data = {};
      const newArr = []; 
     
    if(vehicle.regulatoryCompliance.technomechanicalExpirationDate < date){
        newArr.push("technomechanical")
    }
    if(vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate < date){
        newArr.push("mandatoryInsurance")
    }
    if(vehicle.regulatoryCompliance.operationCardExpirationDate < date){
        newArr.push("operationCard")
    }
        //indicamos  en q direccion buscar 
        data[vehicle.plate]=newArr;
        return data
})
console.log(response)