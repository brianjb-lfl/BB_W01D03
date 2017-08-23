'use strict';

function createCharacter(name, nickName, race, origin, attack, defense){
  return{name, nickName, race, origin, attack, defense,
    describe: function() {
      console.log(`${this.name} is a ${race} from ${origin}`);
    },
    evaluateFight: function(char) {
      let x = this.attack - char.defense;
      let y = char.attack - this.defense;
      return `Your opponent takes ${x} damage, and you receive ${y} damage`;
    }
  };
}

let characters = [];
characters.push(createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 ));
characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1));
characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8));
characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5));
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 2, 4));

//characters.find (item => item.nickName === 'aragorn').describe();

//characters.find(function(item) {
//  return item.nickName === 'aragorn';
//}).describe();

const hobFilter = characters.filter(item => item.race === 'Hobbit');
const killerFilter = characters.filter(item => item.attack > 5);
console.log(killerFilter);