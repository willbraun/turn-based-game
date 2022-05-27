import { Enemy } from './classes.js';
import { enemies } from './objects.js';
import { hero, getRandom, setUpGame } from './helpers.js';

let enemy = new Enemy(getRandom(enemies));

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');

selectWill.addEventListener('click', () => setUpGame('Will', 120, 1.2));
selectMatt.addEventListener('click', () => setUpGame('Matt', 90, 1.8));
selectLevi.addEventListener('click', () => setUpGame('Levi', 180, 0.9));

enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
}, 8000);