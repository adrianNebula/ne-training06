'use strict'

//Requiero saber cuantos vehiculos existen por tipo de ownership
// {'AFFILIATE': 12313,  'OWN':12313}

const vehicles = require('./vehicles2020.json');

const result = vehicles
.map(vehicle => vehicle.ownership)
.reduce((acc,val, index, array) => {
    acc[val.ownership] = (acc[val.ownership] || 0 )+1;
    return index !== (array.length -1)
    ? acc
    :Object.entries(acc)
     // .map (([ownership, total]) => ({ ownership, total}));
},{})
//.sort((obj1, obj2) => obj2.total - obj1.total);
console.log(result)