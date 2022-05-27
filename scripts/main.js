import { setUpGame } from './helpers.js';
import { heroes } from './objects.js';

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');

selectWill.addEventListener('click', () => setUpGame(heroes[0]));
selectMatt.addEventListener('click', () => setUpGame(heroes[1]));
selectLevi.addEventListener('click', () => setUpGame(heroes[2]));


// testing
// let testHero = new Hero({name: 'test', health: 100, powerLevel: 1.5});
// enemy.generateFood();
// const randomMove = enemy.randomMove.bind(enemy);

// setTimeout(() => {
//     randomMove(testHero);
//     console.log(testHero, enemy);
// }, 8000);