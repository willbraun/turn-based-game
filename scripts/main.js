import { Hero, Enemy } from './classes.js';
import { enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));

// prompt user to select hero (randomly selected now for testing)

let hero;
let testHero = new Hero({name: 'kid1', health: 100});

/// HANDLEBARS TEMPLATE

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');
const audio = document.getElementById('characterSelect');

/// generate hero function 
// let hero;
function generateHero(name, health, powerLevel) {
    hero = new Hero({name: name, health: health, powerLevel: powerLevel});
    console.log(hero);
    return hero;
}

function loadHeroTemplate(hero) {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}

function setUpAttackBtn() {
    const attackButton = document.querySelector('.attack-btn');
    const attack = hero.attack.bind(hero);
    console.log(hero);
    attackButton.addEventListener('click', () => {
        attack(enemy);
        console.log(enemy);
    });
}

function setUpEatBtn() {
    const eatButton = document.querySelector('.eat-btn');
    const eat = hero.eat.bind(hero)
    eatButton.addEventListener('click', () => {
        eat();
        console.log(hero);
    });
}

function setUpGame(name, health, powerLevel) {
    hero = generateHero(name, health, powerLevel);
    audio.play();
    setTimeout(() => {
        loadHeroTemplate(hero);
        startScreen.classList.add('off-screen');
        gameScreen.classList.remove('hidden') 
        setUpAttackBtn();
        setUpEatBtn();
        hero.generateFood();
    }, 450);
}

selectWill.addEventListener('click', () => setUpGame('Will', 120, 1.2));
selectMatt.addEventListener('click', () => setUpGame('Matt', 90, 1.8));
selectLevi.addEventListener('click', () => setUpGame('Levi', 180, 0.9));

enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
}, 8000);
