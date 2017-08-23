'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let itemGood;
  // loop thru array
  for (let x = 0; x < arr.length; x++) {
    //console.log(`new ${x} loop`);
    itemGood = true;
    // loop thru properties
    for (let i = 0; i <= Object.keys(query).length; i++) {
      //console.log(`new ${i} loop`);
      let theKey = Object.keys(query)[i];
      //console.log(theKey);
      if (arr[x][theKey] !== query[theKey]) {
        //console.log('I broke');
        itemGood = false;        
      } // end if
    } // end inner for loop properties
    if(itemGood){
      //console.log('I am returning');
      return arr[x];
    }
  } // end for loop
  //console.log('I am null');
  return null;
}

let firstQuery = findOne(HEROES, { squad: 'Avengers', name: 'Hulk' });
console.log(firstQuery);

// item.Object.keys(query)[i] ===  query[Object.keys(query)[i]]
// sample data
// [id, name], so 0 = id      ===  query.id === Captain America
// item.id                    ===  query.id


/*
Old, shitty approach to isMatch
function isMatch(item){
  console.log('what is passed to isMatch: ' + item);
  for (let i=0; i<=Object.keys(query).length; i++) {
    if (item[Object.keys(query)[i]] !== query[Object.keys(query)[i]]) {
      return false;
    }
 } // end for loop
 return item;
} // end isMatch
*/

/*
function findOne(arr, query) {
  // loop thru array
  for (let x = 0; x <= arr.length; x++) {
    console.log(`new ${x} loop`);
    // loop thru properties
    for (let i = 0; i <= Object.keys(query).length; i++) {
      console.log(`new ${i} loop`);
      let theKey = Object.keys(query)[i];
      console.log(theKey);
      if (arr[x][theKey] !== query[theKey]) {
        console.log('I broke');
        break;        
      } // end if
    } // end inner for loop properties
    console.log('I am returning');
    return arr[x];
  } // end for loop
  console.log('I am null');
  return null;
}*/