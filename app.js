"use strict";

let numberOfSeries = +prompt("Nechta serial ko'rdingiz");

let seriesDB = {
  count: numberOfSeries,
  series:{},
  actors:{},
  genres:[],
  privat:false
}


for(let i = 0;i<2;i++){
  let a = prompt("oxirgi ko'rgan serialingiz",""),
  b = +prompt('nechi baxo berasiz',"");
  if(a!=null && b!==null && a != '' && b != ''){
    console.log('done');
    seriesDB.series[a] = b;
  }else{
    console.log('error');
    i--;
  }
 
}


if(seriesDB.count < 5){
  console.log('siz kam serial ko`rgansiz');
}else if(seriesDB.count >= 5 && seriesDB.count <10){
  console.log('siz classic tomoshabinsiz');
}else if(seriesDB.count>=10){
  console.log('siz serialchi zvezdasiz');
}
else{
  console.log('error');
}



console.log(seriesDB);