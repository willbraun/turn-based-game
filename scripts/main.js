import { setUpGame } from './helpers.js';
import { heroes } from './objects.js';
import { generateHero, generateEnemy } from './helpers.js';

let gameHero;
let gameEnemy = generateEnemy();

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');

[selectWill, selectMatt, selectLevi].forEach((button, i) => {
    button.addEventListener('click', () => {
        gameHero = generateHero(heroes[i]);
        setUpGame(gameHero, gameEnemy);
    });
});

// testing
// let testHero = new Hero({name: 'test', health: 100, powerLevel: 1.5});
gameEnemy.generateFood();
const randomMove = gameEnemy.randomMove.bind(gameEnemy);

setTimeout(() => {
    randomMove(gameHero);
    console.log(gameHero, gameEnemy);
}, 8000);