const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {  //initializing the name param in case it is is not passed
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    // //inherit prototype methods from Character here:
    // Player.prototype = Object.create(Character.prototype);

    //NOTE BY USING PROTOTYPES THEY DONT NEED TO BE IN CONSTRUCTOR
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion)
    }

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

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
}

module.exports = Player;