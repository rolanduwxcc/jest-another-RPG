// const { test, expect } = require('@jest/globals');
const Potion = require('../lib/Potion');

function Player(name = '') {  //initializing the name param in case it is is not passed
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

//NOTE BY USING PROTOTYPES THEY DONT NEED TO BE IN CONSTRUCTOR
//returns an object with various player properties
// this.getStats = function() {
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

//return the health
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}`;
};

//is player alive
Player.prototype.isAlive = function() {
    if (this.health > 0) {
        return true;
    }
    return false;
};

//reduce health
Player.prototype.reduceHealth = function(health) {
    this.health = this.health - health;
    if (this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength +5;

    return Math.floor(Math.random() * (max - min) + min);
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