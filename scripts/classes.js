import { foods } from './objects.js';
import { getRandom } from './helpers.js';

export class Character {
    constructor({name, health}) {
        this.name = name;
        this.health = health;
        this.currentFood = null;
    }

    attack(target) {
        target.health -= this.currentFood.damage;
    }

    eat() {
        this.health += this.currentFood.nutrition;
    }

    generateFood() {
        this.currentFood = getRandom(foods);
    };
}

export class Hero extends Character {
    constructor(name, health, currentFood) {
        super(name, health, currentFood);
    }
}

export class Enemy extends Character {
    constructor(name, health, currentFood) {
        super(name, health, currentFood);
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

// export class Game {
//     constructor(selectedHero, generatedEnemy) {
//         this.selectedHero = selectedHero;
//         this.generatedEnemy = generatedEnemy;
//     }
// }