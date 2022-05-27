export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.currentFood = null;
    }

    attack(food, target) {
        target.health -= food.damage;
    }

    eat(food) {
        this.health += food.nutrition;
    }

    generateFood(foodArray) {
        this.currentFood = foodArray[Math.floor(Math.random() * foodArray.length)];
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

export class Game {
    constructor(selectedHero, generatedEnemy) {
        this.selectedHero = selectedHero;
        this.generatedEnemy = generatedEnemy;
    }
}