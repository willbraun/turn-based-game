import { hero, enemy, setUpGame } from './helpers.js';
import {heroes} from './objects.js';

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');

selectWill.addEventListener('click', () => setUpGame(heroes[0]));
selectMatt.addEventListener('click', () => setUpGame(heroes[1]));
selectLevi.addEventListener('click', () => setUpGame(heroes[2]));

enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
}, 8000);