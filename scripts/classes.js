import { foods } from './objects.js';
import { getRandom } from './helpers.js';

export class Character {
    constructor({name, health, powerLevel}) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.currentFood = null;
        this.powerLevel = powerLevel;
    }

    attack(target) {
        target.health -= (this.currentFood.damage * this.powerLevel);
    }

    eat() {
        let newHealth = this.health + this.currentFood.nutrition;
        if (newHealth > this.maxHealth) {
            this.health = this.maxHealth;
        }
        else {
            this.health = newHealth;
        }
    }

    generateFood() {
        this.currentFood = getRandom(foods);
    };
}

export class Hero extends Character {
    constructor(name, health, powerLevel) {
        super(name, health, powerLevel);
    }
}

export class Enemy extends Character {
    constructor(name, health, powerLevel) {
        super(name, health, powerLevel);
    }

    randomMove(target) {
        if (Math.random() > 0.5) {
            this.attack(target);
        }
        else {
            this.eat();
        }
    }
}