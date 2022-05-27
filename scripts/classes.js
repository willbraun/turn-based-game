import { foods } from './objects.js';

export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.currentFood = null;
        // this.attack = this.attack.bind(this);
        // this.eat = this.eat.bind(this);
        // this.generateFood = this.generateFood.bind(this);
    }

    attack(target) {
        target.health -= this.currentFood.damage;
    }

    eat(food) {
        this.health += food.nutrition;
    }

    generateFood() {
        this.currentFood = foods[Math.floor(Math.random() * foods.length)];
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

    randomMove(food, target) {
        if (Math.random() > 0.5) {
            this.attack(food, target);
        }
        else {
            this.eat(food);
        }
    }
}

// export class Game {
//     constructor(selectedHero, generatedEnemy) {
//         this.selectedHero = selectedHero;
//         this.generatedEnemy = generatedEnemy;
//     }
// }