export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.currentFood = null;
    }

    throw(food, target) {
        target.health -= food.damage;
    }

    consume(food) {
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
            this.throw(food, target);
        }
        else {
            this.consume(food);
        }
    }
}

export class Game {
    constructor(selectedHero, generatedEnemy) {
        this.selectedHero = selectedHero;
        this.generatedEnemy = generatedEnemy;
    }
}