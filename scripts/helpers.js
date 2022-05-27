import { Hero } from './classes.js';

export let hero;

export const getRandom = objArray => objArray[Math.floor(Math.random() * objArray.length)];

const generateHero = (name, health, powerLevel) => {
    hero = new Hero({name: name, health: health, powerLevel: powerLevel});
    console.log(hero);
    return hero;
}

const loadHeroTemplate = hero => {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}

const setUpAttackBtn = () => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    console.log(hero);
    attackButton.addEventListener('click', () => {
        attack(enemy);
        console.log(enemy);
    });
}

const setUpEatBtn = () => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        console.log(hero);
    });
}

export const setUpGame = (name, health, powerLevel) => {
    hero = generateHero(name, health, powerLevel);
    const audio = document.getElementById('characterSelect');
    audio.play();
    setTimeout(() => {
        loadHeroTemplate(hero);
        const startScreen = document.querySelector('.opening-screen');
        startScreen.classList.add('off-screen');
        const gameScreen = document.querySelector('.game-screen');
        gameScreen.classList.remove('hidden') 
        setUpAttackBtn();
        setUpEatBtn();
        hero.generateFood();
    }, 450);
}