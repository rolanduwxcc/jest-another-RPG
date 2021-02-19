const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');
// console.log(new Potion());

// const { test, expect, jest } = require('@jest/globals');
// const { number } = require('yargs');

const Player = require('../lib/Player');
const { expect, test } = require('@jest/globals');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    
});

test('gets player stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets player inventory as an array', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
});

test('gets player health value', () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('check if player is alive', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();
    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
});

test('subtracting from player health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);
    
    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});