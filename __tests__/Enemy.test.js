const Potion = require('../lib/Potion');
const Enemy = require('../lib/Enemy');

jest.mock('../lib/Potion.js');

const { expect, test } = require('@jest/globals');

test('creates a enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
    
});

test('gets enemy health value', () => {
    const enemy = new Enemy('Dave');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('check if enemy is alive', () => {
    const enemy = new Enemy('Dave');

    expect(enemy.isAlive()).toBeTruthy();
    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
});

test('subtracting from enemy health', () => {
    const enemy = new Enemy('Dave');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);
    
    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test('getting a enemy attack value', () => {
    const enemy = new Enemy('Dave');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('gets a description fo the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
})