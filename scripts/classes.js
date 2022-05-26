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

    generateFood() {
        
    };
}

export class Hero extends Character {
    constructor(name, health) {
        super(name);
        super(health);
        super(currentFood);
    }
}

export class Enemy extends Character {
    constructor(name, health) {
        super(name);
        super(health);
        super(currentFood);
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

class Game {
    constructor(selectedHero, generatedEnemy) {
        this.selectedHero = selectedHero;
        this.generatedEnemy = generatedEnemy;
    }
}