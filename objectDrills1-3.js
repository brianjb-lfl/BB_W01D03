'use strict';

// 1 - Object initializers
const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour) * 100;
  }
};

// 2 -Iterating
const ourObj = {
  foo: 'val1',
  bar: 'valB',
  fum: 'valFum',
  quux: 'valQ',
  spam: 'valSp'
};

// 3 - Arrays in objects
const newObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] 
};

console.log(newObj.meals[3]);