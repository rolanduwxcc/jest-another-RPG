const { test, expect } = require('@jest/globals');
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

test('getting a player attack value', () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

module.exports = Player;