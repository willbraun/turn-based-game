import { Hero, Enemy } from './classes.js';
import { heros, enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));
console.log(enemy);


// prompt user to select hero (randomly selected now for testing)

let hero;
let testHero = new Hero(getRandom(heros));
console.log(testHero);


// document.querySelector('.hero1button').addEventListener('click', () => {
//     const hero = new Hero('kid1', 100)
// });
const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');


buttonOne.addEventListener('click', () => {
    hero = new Hero('kid1', 100);
    enemy = new Enemy('bully1', 100);
    /// needs to initiate game screen and remove character choice screen after clicking button
    /// make classes for html elements to show and hide from screens
    startScreen.classList.add('off-screen'); /// this move start screen out of the way, 
    /// need to position start screen over main game screen and reveal game screen when button is cicked
    setTimeout(() => {
        gameScreen.classList.remove('hidden');
    }, 450);
})


// player.generateFood to show food on screen
testHero.generateFood();
console.log(testHero.currentFood);

// click attack
const attack = testHero.attack.bind(testHero);
attackButton.addEventListener('click', () => {
    attack(enemy);
    console.log(enemy);
});


// click consume
const eat = testHero.eat.bind(testHero)
eatButton.addEventListener('click', () => {
    eat(testHero.currentFood);
    console.log(testHero);
});

// enemy random move
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(randomMove, 1000);


