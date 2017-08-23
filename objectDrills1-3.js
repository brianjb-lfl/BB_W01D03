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

// 4 & 5 - Arrays of objects
function createObject (name, jobTitle, boss) {
  return {
    name, jobTitle, boss
  };
}

const anArray = [];

anArray.push(createObject('Brad','Student', 'Everyone'));
console.log(anArray);
anArray.push(createObject('Brian','Master of the Universe', 'Kermit'));
anArray.push(createObject('Raul','Chef'));
anArray.push(createObject('Jeff','Taxi Driver', 'People on Sidewalk'));
anArray.push(createObject('Bob','Professional Fly Fisherman', 'Zeus'));
console.log(anArray);

anArray.forEach(item => {
  let effectiveBoss;
  if (item.boss) {
    effectiveBoss = `reports to ${item.boss}`;
  } else {
    effectiveBoss = 'doesn\'t report to anybody';
  }
  console.log(`${item.jobTitle} ${item.name} ${effectiveBoss}.`); 
  
});

// 6 Cracking the Code
const codedMessage = 'craft block argon meter bells brown croon droop';



function decode (originalString) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  // message (theString) gets passed in (a long string)
  // convert input string into an array of words
  const wordArray = originalString.split(' ');
  let output = ' ';
  // iterate through that array
  wordArray.forEach(function(word){
  // examine 1st character of string (use charAt())
    if (word.charAt(0) in cipher) {
      output += word.charAt(cipher[word.charAt(0)]);
    } else {
      output += ' ';
    }
  });
  return output;
}
// if that character is a property of cipher, get the value of that property at cipher
//   (e.g. if 1st letter is a, get 1)
//   then change the item of the array to that looked up # (use charAt())
// else change the item of the array to a space

console.log(decode(codedMessage));
