import { Hero, Enemy } from './classes.js';
import { enemies } from './objects.js';

export const getRandom = objArray => objArray[Math.floor(Math.random() * objArray.length)];

export const generateHero = ({name, health, powerLevel, faceImg}) => {
    return new Hero({name: name, health: health, powerLevel: powerLevel, faceImg: faceImg});
}

export const generateEnemy = () => {
    return new Enemy(getRandom(enemies));
}

const updateHealthBar = (hero) => {
    const heroHealthNum = document.querySelector('.hero-health-bar-num');
    const heroHealthBar = document.querySelector('.hero-health');
    const heroPercentage = Math.round((hero.health / hero.maxHealth) * 100);
    heroHealthBar.style.width = `${heroPercentage}%`;
    heroHealthNum.innerHTML = Math.round(hero.health);
    return;
}

const updateFoodItem = (hero) => {
    const foodIcon = document.querySelector('.food-item');
    foodIcon.innerHTML = hero.currentFood.icon;
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
    document.querySelector('.button-section').innerHTML = html;
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
        enableButtons();

        console.log(hero, enemy);
    }, 10); // !!!! Make this longer when finished
}

const setUpAttackBtn = (hero, enemy) => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    attackButton.addEventListener('click', () => {
        attack(enemy);
        
        if (enemy.health > 0) {
            hero.generateFood();
            updateFoodItem(hero);
            enemyTurn(hero, enemy);
            updateHealthBar(hero);
        }
        
        disableButtons();
        console.log(enemy);
    });
}

const setUpEatBtn = (hero, enemy) => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        updateHealthBar(hero);
        hero.generateFood();
        updateFoodItem(hero);
        enemyTurn(hero, enemy);

        disableButtons();
        console.log(hero);
    });
}

export const setUpGame = (hero, enemy) => {
    // const audio = document.getElementById('characterSelect');
    // audio.play();
    const startScreen = document.querySelector('.opening-screen');
    const gameScreen = document.querySelector('.game-screen');
    loadHeroTemplate(hero);

    
    startScreen.classList.add('off-screen');
    updateHealthBar(hero);
    setTimeout(() => {
        setUpAttackBtn(hero, enemy);
        setUpEatBtn(hero, enemy);
        hero.generateFood();
        updateFoodItem(hero);
        gameScreen.classList.remove('hidden'); 
    }, 900);
}