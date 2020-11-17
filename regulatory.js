'use strict'
/*listado de vehiculos (placa) que tengan alguna de las regulatoryCompliance proxima a vencer 
(vayan a vencer en los proximos 2 meses)
['MNP123', 'SDF333', 'ASD222']*/

const vehicles = require('./vehicles2020.json');
//fecha actual + dos meses
let date = Date.now() + (86400000 * 60); 

const response = vehicles
// comparamos entre la fecha actual y la fecha dentro de 2 meses asignada a "date"
.filter(vehicle =>
        vehicle.regulatoryCompliance.technomechanicalExpirationDate < date ||    
        vehicle.regulatoryCompliance.mandatoryInsuranceExpirationDate < date ||    
        vehicle.regulatoryCompliance.operationCardExpirationDate < date)
        //mapeamos unicamente las placas de los vehiculos q cumplen con el filtro de fecha
.map(vehicle => vehicle.plate)
console.log(response)