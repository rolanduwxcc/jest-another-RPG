const Potion = require('../lib/Potion');
const Character = require('./Character');


function Player(name = '') {  //initializing the name param in case it is is not passed
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

//inherit prototype methods from Character here:
Player.prototype = Object.create(Character.prototype);

//NOTE BY USING PROTOTYPES THEY DONT NEED TO BE IN CONSTRUCTOR
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//returns the inventory array or false if empty
// this.getInventory = function() {
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion)
}

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index,1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

module.exports = Player;