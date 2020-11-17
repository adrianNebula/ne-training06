'use strict'

/*quiero saber por cada año (year) que vehiculo existen, oordenados por el año
      {year: 1980, vehicles: [MNP123,MMM5,DFR333]}
      {year: 1985, vehicles: [AAA8999,CCC888,VVV888]}
      {year: 2000, vehicles: [XVB222,SHG333,DHYG666]*/

const vehicles = require('./vehicles2020.json');

const result = vehicles
.reduce((acc ,val) => {
    // "find" llama al predicado una vez para cada elemento de la matriz,
    // hasta que encuentra uno donde el predicado devuelve verdadero.
    let currentvalue =  acc.find(vehicle => {
        // retrornar año
        return vehicle.year === val.year})
        
    if (currentvalue){
        // lo que lleva en valor actual, busca en la base de datos y empuja la placa
        currentvalue.vehicles.push(val.plate)
    }
    else{
        // usa la misma llave como etiqueta y le asigna el año y la placa
        currentvalue = {year : val.year, vehicles: [val.plate]}
        //empuja el valor actual del año y de la placa
        acc.push(currentvalue);
    }
    return acc;
    }, [])
    //ordenar los años de menor a mayor
    .sort((objA,objB) => objA.year-objB.year);       
    
    console.log(result)