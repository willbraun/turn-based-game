import { Hero, Enemy } from './classes.js';

export const getRandom = objArray => objArray[Math.floor(Math.random() * objArray.length)];

const generateHero = (name, health, powerLevel) => {
    return new Hero({name: name, health: health, powerLevel: powerLevel});
}

const generateEnemy = () => {
    return new Enemy(getRandom(enemies));
}

const loadHeroTemplate = hero => {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}

const setUpAttackBtn = hero => {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    console.log(hero);
    let enemy = generateEnemy();
    attackButton.addEventListener('click', () => {
        attack(enemy);
        console.log(enemy);
    });
}

const setUpEatBtn = hero => {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        console.log(hero);
    });
}

export const setUpGame = (name, health, powerLevel) => {
    let thisHero = generateHero(name, health, powerLevel);
    const audio = document.getElementById('characterSelect');
    // audio.play();
    setTimeout(() => {
        loadHeroTemplate(thisHero);
        const startScreen = document.querySelector('.opening-screen');
        startScreen.classList.add('off-screen');
        const gameScreen = document.querySelector('.game-screen');
        gameScreen.classList.remove('hidden') 
        setUpAttackBtn(thisHero);
        setUpEatBtn(thisHero);
        thisHero.generateFood();
    }, 450);
}