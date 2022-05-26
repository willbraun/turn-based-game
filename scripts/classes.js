class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    throw(food, target) {
        target.health =- food.damage;
    }

    consume(food) {
        this.health += food.nutrition;
    }
}

class Player extends Character {
    constructor(name, health) {
        super(name);
        super(health);
    }
}

class Enemy extends Character {
    constructor(name, health) {
        super(name);
        super(health);
    }

    randomMove() {
        if (Math.random() > 0.5) {
            this.throw(food, target);
        }
        else {
            this.consume(food);
        }
    }
}