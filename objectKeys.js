'use strict';

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
};

const expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {  
  let sortedExpectedKeys = expectedKeys.slice();
  sortedExpectedKeys.sort();
  let sortedObjectKeys = Object.keys(object);
  console.log(sortedObjectKeys);
  sortedObjectKeys.sort();
  // by now, both sets of keys are in alphabetical order
  //console.log( `${sortedObjectKeys} / ${sortedExpectedKeys} === ${sortedObjectKeys === sortedExpectedKeys}`);
  return sortedObjectKeys.toString() === sortedExpectedKeys.toString();
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



function testIt() {
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  };

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  };

  const objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  };

  const expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    );
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt();