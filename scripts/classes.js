import { foods } from './objects.js';
import { getRandom, disableButtons } from './helpers.js';

export class Character {
    constructor({name, health, powerLevel, faceImg}) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.currentFood = null;
        this.powerLevel = powerLevel;
        this.faceImg = faceImg;

    }

    attack(target) {
        const newHealth = target.health - (this.currentFood.damage * this.powerLevel);
        if (newHealth < 0) {
            target.health = 0;
            this.gameOver();
        }
        else {
            target.health = newHealth;
        }

    }

    eat() {
        const newHealth = this.health + this.currentFood.nutrition;
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

    gameOver() {
        disableButtons();
        
        let title = "";
        if (this instanceof Hero) {
            title = `🏆🏆🏆   You win!   🏆🏆🏆`;
        } 
        else {
            title = `Game over... ${this.name} wins`;
        }

        
        document.querySelector('.game-over .title').textContent = title;
        document.querySelector('.game-over .message').textContent = `Final attack: ${this.currentFood.icon}`
        document.querySelectorAll('.game-over img').forEach(img => img.src = `../files/${this.faceImg}`);

        document.querySelector('.game-over').style.visibility = 'visible';
        console.log('game over');
    }
}

export class Hero extends Character {
    constructor(name, health, powerLevel, faceImg) {
        super(name, health, powerLevel, faceImg);
    }
}

export class Enemy extends Character {
    constructor(name, health, powerLevel, faceImg) {
        super(name, health, powerLevel, faceImg);
    }

    randomMove(target) {
        if (Math.random() > 0.2) {
            this.attack(target);
        }
        else {
            this.eat();
        }
    }
}