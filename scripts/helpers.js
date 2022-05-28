import { Hero, Enemy } from './classes.js';
import { enemies } from './objects.js';

export const getRandom = objArray => objArray[Math.floor(Math.random() * objArray.length)];

export const generateHero = ({name, health, powerLevel}) => {
    return new Hero({name: name, health: health, powerLevel: powerLevel});
}

export const generateEnemy = () => {
    return new Enemy(getRandom(enemies));
}

const updateHealthBar = (char) => {
    const healthBar = document.querySelector('.hero-health');
    console.log(char.health)
    return healthBar.style.width = `${char.health}%`
}

const loadHeroTemplate = hero => {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}

const disableButtons = () => {
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
    }, 5000);
}

const setUpAttackBtn = (hero, enemy) => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    attackButton.addEventListener('click', () => {
        attack(enemy);
        updateHealthBar(enemy);
        hero.generateFood();
        console.log(enemy);

        disableButtons();
        enemyTurn(hero, enemy);
    });
}

const setUpEatBtn = (hero, enemy) => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        updateHealthBar(hero);
        hero.generateFood();
        console.log(hero);

        disableButtons();
        enemyTurn(hero, enemy);
    });
}



export const setUpGame = (hero, enemy) => {
    const audio = document.getElementById('characterSelect');
    // audio.play();
    const startScreen = document.querySelector('.opening-screen');
    const gameScreen = document.querySelector('.game-screen');
    loadHeroTemplate(hero);
    startScreen.classList.add('off-screen');
    setTimeout(() => {
        setUpAttackBtn(hero, enemy);
        setUpEatBtn(hero, enemy);
        hero.generateFood();
        gameScreen.classList.remove('hidden'); 
    }, 900);
}