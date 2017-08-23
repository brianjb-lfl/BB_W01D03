'use strict';
// data e.g. = [{name: 'Johnny Robot', grade: 'C'}, {name: 'Johnny Robot', grade: 'C'}]
function makeStudentsReport(data) {
  let theReport = [];
  for (let i = 0; i < data.length; i++) {
    // get a single object. 
    // e.g. {name: 'Johnny Robot', grade: 'C'}
    let theStudent = data[i];
    // get array of keys, e.g. [name, grade]
    let theKeys = Object.keys(theStudent);
    let theContents = '';
    let x = 0;
    while (x < theKeys.length - 1) {
      theContents += `${theStudent[theKeys[x]]}: `;
      x++;
    }
    theContents += `${theStudent[theKeys[x]]}`;
    theReport.push(theContents);
  }
  console.log(theReport);
  return theReport;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/


// tests

function testIt() {

  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' }
  ];

  const expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (!results.find(function (item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
