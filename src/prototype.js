/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:

  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
      

 NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype

  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC

  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
*/
class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.dimentions = obj.dimentions;
  }
  destroy() {
    return 'Game object was removed from the game.';
  }
};
class NPC extends GameObject {
  constructor(obj) {
    super(obj);
    this.hp = obj.hp;
    this.name = obj.name;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
  destroy() {
    return 'Game object was removed from the game.';
  }
};
class Humanoid extends NPC {
  constructor(obj) {
    super(obj);
    this.faction = obj.faction;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  destroy() {
    return 'Game object was removed from the game.';
  }
  takeDamage(par) {
    return `${this.name} took damage`;
  }
};
let hilal = new Humanoid({
  faction: 'aissani',
  weapons: 'caboss',
  createdAt: 'settara',
  dimentions: '2900000',
  name: 'hilalala',
  language: 'english',
  hp: 7
});
console.log(hilal);
console.log(Humanoid.takeDamage());

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
