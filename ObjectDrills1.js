'use strict';

const createMyObject = {
  foo: 'bar',
  answerToUniverse: 42,
  "olly olly": 'oxen free',
  bar: 'something',
  bizz: 'something else',
  sayHello: function(){
    return 'hello';
  }
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};

//console.log(createMyObject.foo);
//updateObject(createMyObject);
//console.log(createMyObject.foo);
//console.log(createMyObject.bang);
//let myPers = personMaker();
//console.log(myPers.fullName());
keyDeleter(sampleObj);
console.log(sampleObj);