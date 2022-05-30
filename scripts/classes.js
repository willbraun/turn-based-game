import { foods } from './objects.js';
import { getRandom, disableButtons } from './helpers.js';

export class Character {
    constructor({ name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg }) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.currentFood = null;
        this.powerLevel = powerLevel;
        this.faceImg = faceImg;
        this.backgroundImg = backgroundImg;
        this.standImg = standImg;
        this.throwImg = throwImg;
    }

    attack(target) {
        const newHealth = target.health - (this.currentFood.damage * this.powerLevel);
        if (Math.round(newHealth) <= 0) {
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

        const youLost = document.getElementById('youLose')
        const youWon = document.getElementById('youWin')
        score.pause();
        let title = "";
        if (this instanceof Hero) {
            title = `🏆🏆🏆   You win!   🏆🏆🏆`;
            youWon.play()
        }
        else {
            title = `Game over... ${this.name} wins`;
            youLost.play()
        }


        document.querySelector('.game-over .title').textContent = title;
        document.querySelector('.game-over .message').textContent = `Final attack: ${this.currentFood.icon}`
        document.querySelectorAll('.game-over img').forEach(img => img.src = `../files/${this.faceImg}`);

        document.querySelector('.game-over').style.visibility = 'visible';
        console.log('game over');
    }
}

export class Hero extends Character {
    constructor(name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg) {
        super(name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg);
    }

    heroThrow() {
        const heroStanding = document.querySelector('.hero-standing');
        heroStanding.src = `./files/${this.throwImg}`;
        heroStanding.style.transform = 'translate(25%, 0) scale(1.5)';

        const heroFood = document.querySelector('.hero-food');
        heroFood.innerHTML = this.currentFood.icon;
        heroFood.classList.toggle('.move-right');
        setTimeout(() => {
            heroStanding.src = `./files/${this.standImg}`;
            heroStanding.style.transform = 'translate(25%, -25%) scale(1)';
            heroFood.classList.toggle('.move-right');
        }, 1000);
    }
}

export class Enemy extends Character {
    constructor(name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg) {
        super(name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg);
    }

    enemyThrow() {
        const enemyStanding = document.querySelector('.enemy-standing');
        enemyStanding.src = `./files/${this.throwImg}`;

        const enemyFood = document.querySelector('.enemy-food');
        enemyFood.innerHTML = this.currentFood.icon;
        enemyFood.classList.toggle('.move-left');
        setTimeout(() => {
            enemyStanding.src = `./files/${this.standImg}`;
            enemyFood.classList.toggle('.move-left');
        }, 1000);
    }

    randomMove(target) {
        if (Math.random() > 0.2) {
            this.attack(target);
            this.enemyThrow();
        }
        else {
            this.eat();
        }
    }
}