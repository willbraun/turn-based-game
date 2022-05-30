import { Hero, Enemy } from './classes.js';
import { enemies } from './objects.js';

export const getRandom = objArray => objArray[Math.floor(Math.random() * objArray.length)];

export const generateHero = ({ name, health, powerLevel, faceImg, backgroundImg, standImg, throwImg }) => {
    const foodWeapon = document.querySelector('.foodWeapon');
    return new Hero({ name: name, health: health, powerLevel: powerLevel, faceImg: faceImg, backgroundImg: backgroundImg, standImg: standImg, throwImg: throwImg });
}

export const generateEnemy = () => {
    return new Enemy(getRandom(enemies));
}

const setBackground = (hero) => {
    const gameBg = document.querySelector('.game-screen');
    gameBg.style.background = `url(./background-images/${hero.backgroundImg})`;
    gameBg.style.backgroundPosition = `0, 0`;
}


const updateHeroHealthBar = (hero) => {
    const heroHealthNum = document.querySelector('.hero-health-num');
    const heroHealthBar = document.querySelector('.hero-health');
    const heroPercentage = Math.round((hero.health / hero.maxHealth) * 100);
    heroHealthBar.style.width = `${heroPercentage}%`;
    heroHealthNum.innerHTML = Math.round(hero.health);
    if (heroPercentage > 31) {
        heroHealthBar.style.background = '#09ff00';
    } else if (heroPercentage < 30) {
        heroHealthBar.style.background = '#ffc30d';
    } else if (heroPercentage < 20) {
        heroHealthBar.style.background = '#c10303';
    }
}

const updateEnemyHealthBar = (enemy) => {
    const enemyHealthNum = document.querySelector('.enemy-health-num');
    const enemyHealthBar = document.querySelector('.enemy-health');
    const enemyPercentage = Math.round((enemy.health / enemy.maxHealth) * 100);
    enemyHealthBar.style.width = `${enemyPercentage}%`;
    enemyHealthNum.innerHTML = Math.round(enemy.health);
    if (enemyPercentage > 31) {
        enemyHealthBar.style.background = '#09ff00';
    } else if (enemyPercentage < 30) {
        enemyHealthBar.style.background = '#ffc30d';
    } else if (enemyPercentage < 20) {
        enemyHealthBar.style.background = '#c10303';
    }
}

const updateFoodItem = (hero) => {
    const foodIcon = document.querySelector('.food-item');
    const foodNutri = document.querySelector('.food-nutri');
    const foodDmg = document.querySelector('.food-dmg');
    foodIcon.innerHTML = hero.currentFood.icon;
    foodNutri.innerHTML = `Nutrition:<br>${hero.currentFood.nutrition}`;
    foodDmg.innerHTML = `Damage:<br>${hero.currentFood.damage}`;
}

const loadHeroTemplate = hero => {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.button-section').innerHTML = html;
}

const loadEnemyTemplate = enemy => {
    const enemySource = document.querySelector('#enemy-display-template').innerHTML;
    const template = Handlebars.compile(enemySource);
    const html = template(enemy);
    document.querySelector('.enemy-display').innerHTML = html;
}

const loadHeroFaceTemplate = hero => {
    const heroFaceSource = document.querySelector('#hero-display-template').innerHTML;
    const template = Handlebars.compile(heroFaceSource);
    const html = template(hero);
    document.querySelector('.hero-display').innerHTML = html;
}


export const disableButtons = () => {
    document.querySelectorAll('.attack-btn, .eat-btn').forEach(button => button.disabled = true);
}

const enableButtons = () => {
    document.querySelectorAll('.attack-btn, .eat-btn').forEach(button => button.disabled = false);
}

const enemyTurn = (hero, enemy) => {
    setTimeout(() => {
        enemy.generateFood();
        enemy.randomMove.call(enemy, hero);
        updateEnemyHealthBar(enemy);
        enableButtons();

        console.log(hero, enemy);
    }, 10); // !!!! Make this longer when finished
}

const setUpAttackBtn = (hero, enemy) => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    const heroThrow = document.getElementById('hero-throw');
    const heroThrowMove = hero.heroThrow.bind(hero);
    
    attackButton.addEventListener('click', () => {
        attack(enemy);
        updateEnemyHealthBar(enemy);
        heroThrowMove();
        heroThrow.play();

        if (enemy.health > 0) {
            hero.generateFood();
            updateFoodItem(hero);
            enemyTurn(hero, enemy);
            updateHeroHealthBar(hero);
        }

        disableButtons();
        console.log(enemy);
    });
}

const setUpEatBtn = (hero, enemy) => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    const eating = hero.heroEat.bind(hero);
    const eatFood = document.getElementById("eatFood")
    eatButton.addEventListener('click', () => {
        eatFood.play()
        eating();
        eat();
        hero.eatMotion('.hero-food');
        updateHeroHealthBar(hero);
        hero.generateFood();
        updateFoodItem(hero);
        enemyTurn(hero, enemy);

        disableButtons();
        console.log(hero);
    });
}

export const setUpGame = (hero, enemy) => {
    const audio = document.getElementById('char-select-audio');
    audio.play();
    const startScreen = document.querySelector('.opening-screen');
    const gameScreen = document.querySelector('.game-screen');
    loadEnemyTemplate(enemy);
    loadHeroFaceTemplate(hero);
    loadHeroTemplate(hero);
    startScreen.classList.add('off-screen');
    updateHeroHealthBar(hero);
    updateEnemyHealthBar(enemy);
    setTimeout(() => {
        setBackground(hero);
        setUpAttackBtn(hero, enemy);
        setUpEatBtn(hero, enemy);
        hero.generateFood();
        updateFoodItem(hero);
        gameScreen.classList.remove('hidden');
    }, 900);
    setTimeout(() => {
        const score = document.getElementById('score')
        score.play()
    }, 1000);
}
