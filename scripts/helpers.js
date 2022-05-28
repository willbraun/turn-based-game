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

const setUpAttackBtn = (hero, enemy) => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    attackButton.addEventListener('click', () => {
        attack(enemy);
        updateHealthBar(enemy);
        console.log(enemy);
        hero.generateFood();
    });
}

const setUpEatBtn = hero => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        updateHealthBar(hero);
        console.log(hero);
        hero.generateFood();
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
        setUpEatBtn(hero);
        hero.generateFood();
        gameScreen.classList.remove('hidden'); 
    }, 900);
}