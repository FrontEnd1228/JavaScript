"use strict";

let numberOfSeries = +prompt("Nechta serial ko'rdingiz");

let seriesDB = {
  count: numberOfSeries,
  series:{},
  actors:{},
  genres:[],
  privat:false
}

let a = prompt("oxirgi ko'rgan serialingiz",""),
b = +prompt('nechi baxo berasiz',""),
c = prompt("oxirgi ko'rgan serialingiz","");

let d = +prompt('nechi baxo berasiz',"");


seriesDB.series[a] = c
seriesDB.series[c] = d

console.log(seriesDB);